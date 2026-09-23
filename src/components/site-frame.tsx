import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SiteFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('flex flex-col gap-10', className)}>{children}</div>
}
