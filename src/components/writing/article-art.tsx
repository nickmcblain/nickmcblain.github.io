import { cn } from '@/lib/utils'

type ArticleArtProps = {
  src: string
  alt: string
  /** Start greyscale and reveal colour when the parent `.group` is hovered. */
  muted?: boolean
  className?: string
}

export function ArticleArt({ src, alt, muted, className }: ArticleArtProps) {
  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden bg-black',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          'h-full w-full object-cover transition duration-500',
          muted && 'grayscale group-hover:grayscale-0',
        )}
      />
      {/* halftone dot overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply [background-image:radial-gradient(circle,rgba(0,0,0,0.9)_0.6px,transparent_0.9px)] [background-size:3px_3px]"
      />
    </div>
  )
}
