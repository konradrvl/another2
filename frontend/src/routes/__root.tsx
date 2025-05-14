import { Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'
import type { QueryClient } from '@tanstack/react-query'



export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  )
}
