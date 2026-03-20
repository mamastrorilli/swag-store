import { Metadata } from 'next'
import { ProductGrid, PRODUCTS_PER_PAGE } from '@/components/product/product-grid'
import { fetchProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full collection of Vercel swag.',
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = params?.page ? parseInt(params.page) : 1

  const { products, meta: { pagination } } = await fetchProducts({ page, limit: PRODUCTS_PER_PAGE })

  return <ProductGrid products={products} pagination={pagination} title="All Products" />
}
