import { Outlet, createRootRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/site-header'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-[500px] flex-col px-5">
        <SiteHeader />
        <div className="flex flex-col pt-6 pb-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
