import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/activities/$activityName/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/activities/$activityId/"!</div>
}
