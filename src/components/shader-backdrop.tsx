import { useEffect, useRef } from 'react'

const VERT = `#version 300 es
precision highp float;
const vec2 verts[3] = vec2[3](vec2(-1.,-1.), vec2(3.,-1.), vec2(-1.,3.));
void main() { gl_Position = vec4(verts[gl_VertexID], 0., 1.); }
`

const FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_dark;
uniform vec2 u_pointer;
uniform vec3 u_accent;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3. - 2. * f);
  return mix(
    mix(hash(i), hash(i + vec2(1., 0.)), u.x),
    mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.;
  float a = .5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= .5;
  }
  return v;
}

// 4x4 ordered (Bayer) dither threshold
float bayer4(vec2 p) {
  ivec2 q = ivec2(mod(p, 4.));
  int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(m[q.y * 4 + q.x]) + .5) / 16.;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 p = uv;
  p.x *= u_resolution.x / u_resolution.y;
  p += (u_pointer - .5) * 0.08;

  float t = u_time * 0.03;
  vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 - t * 0.7 + vec2(5.2, 1.3)));
  float n = fbm(p * 1.2 + 1.8 * q + t * 0.5);

  // quantise into bands, break edges with ordered dither (2px dots)
  float levels = 6.;
  float d = (bayer4(floor(gl_FragCoord.xy / 2.)) - .5) / levels;
  float nq = floor((n + d) * levels) / levels;

  vec3 light = vec3(1.0) - nq * 0.10;
  vec3 dark = vec3(0.09) + nq * 0.10;
  vec3 base = mix(light, dark, u_dark);

  float tint = smoothstep(0.55, 0.9, n) * 0.12;
  vec3 col = mix(base, u_accent, tint);
  fragColor = vec4(col, 1.);
}
`

// Every-style red, matches --accent-spot in styles.css
const ACCENT: [number, number, number] = [0.84, 0.23, 0.18]

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function ShaderBackdrop({ theme }: { theme: 'light' | 'dark' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const themeRef = useRef(theme)
  themeRef.current = theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      powerPreference: 'low-power',
    })
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return
    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uDark = gl.getUniformLocation(program, 'u_dark')
    const uPointer = gl.getUniformLocation(program, 'u_pointer')
    const uAccent = gl.getUniformLocation(program, 'u_accent')
    gl.uniform3f(uAccent, ...ACCENT)

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let frame = 0
    let running = true
    const pointer = { x: 0.5, y: 0.5 }
    const target = { x: 0.5, y: 0.5 }
    const start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.floor(window.innerWidth * dpr)
      const h = Math.floor(window.innerHeight * dpr)
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
    }

    const draw = () => {
      resize()
      pointer.x += (target.x - pointer.x) * 0.05
      pointer.y += (target.y - pointer.y) * 0.05
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, (performance.now() - start) / 1000)
      gl.uniform1f(uDark, themeRef.current === 'dark' ? 1 : 0)
      gl.uniform2f(uPointer, pointer.x, 1 - pointer.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = () => {
      if (!running) return
      draw()
      frame = requestAnimationFrame(loop)
    }

    const onPointer = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }

    const onVisibility = () => {
      if (reduceMotion) return
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frame)
      } else if (!running) {
        running = true
        loop()
      }
    }

    // theme flips still need a redraw when motion is reduced
    const observer = new MutationObserver(() => {
      if (reduceMotion) draw()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    if (reduceMotion) {
      draw()
      window.addEventListener('resize', draw)
    } else {
      loop()
      window.addEventListener('pointermove', onPointer, { passive: true })
      document.addEventListener('visibilitychange', onVisibility)
    }

    return () => {
      running = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', draw)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{
        maskImage:
          'linear-gradient(to bottom, black 0%, black 30%, transparent 80%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, black 0%, black 30%, transparent 80%)',
      }}
    />
  )
}
