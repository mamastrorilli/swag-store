import { fetchProducts } from '@/lib/products'
import ProductCarousel from './product-carousel'

export default async function HomepageCarousel() {
  const { products } = await fetchProducts({ featured: true })
  return <ProductCarousel products={products} />
}
