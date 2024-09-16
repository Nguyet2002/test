import RegisterPage from '@/pages/register/register'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/register')({
  component: RegisterPage
})