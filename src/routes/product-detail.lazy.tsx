import ProductDetail from '@/pages/detail'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/product-detail')({
  component: ProductDetail
})