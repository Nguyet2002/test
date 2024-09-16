import RegisterRespon from '@/pages/register/register-respon'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/register-respon')({
  component: RegisterRespon
})