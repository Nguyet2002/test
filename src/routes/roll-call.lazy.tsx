import RollCallPage from '@/pages/roll-call'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/roll-call')({
  component: RollCallPage
})