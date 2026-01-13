import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL,
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
})

export const getRouter = () => router

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
