import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SiteFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className={cn(
          'mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-8',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
