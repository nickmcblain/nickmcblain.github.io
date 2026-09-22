import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Experience', to: '/work' },
  { label: 'Startups', to: '/', hash: 'startups' },
  { label: 'Writing', to: '/', hash: 'writing' },
  { label: 'Contact', to: '/', hash: 'contact' },
] as const

const profileImageSrc = `${import.meta.env.BASE_URL}profile.jpeg`

const navLinkClasses =
  'text-muted-foreground transition-colors hover:text-foreground'

export function SiteHeader() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const initialTheme =
      stored === 'light' || stored === 'dark'
        ? stored
        : systemPrefersDark
          ? 'dark'
          : 'light'

    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <header className="sticky top-0 z-10 -mx-5 flex flex-col gap-4 bg-background/95 px-5 pt-8 pb-4 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={profileImageSrc}
            alt="Nick McBlain"
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="truncate text-sm font-medium">Nick McBlain</p>
        </Link>
        <button
          type="button"
          onClick={handleThemeToggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon-sm' }),
            'shrink-0',
          )}
        >
          <span className="sr-only">Toggle theme</span>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            hash={'hash' in link ? link.hash : undefined}
            activeOptions={
              'hash' in link
                ? { exact: true, includeHash: true }
                : { exact: true }
            }
            className={navLinkClasses}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}
