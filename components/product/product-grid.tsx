export const PRODUCTS_PER_PAGE = 6

import { MetaPagination, Product } from '@/types'
import ProductCard from './product-card'
import { Pagination, PaginationContent, PaginationPrevious, PaginationNext } from '../ui/pagination'
import { ProductCardSkeleton } from './product-grid.skeleton'

export const ProductGrid = ({
  products,
  pagination,
  basePath = '/products',
  title,
}: {
  products: Product[]
  pagination: MetaPagination
  basePath?: string
  title?: string
}) => {
  const paginationContent =
    pagination.totalPages > 1 ? (
      <Pagination className="w-auto mx-0 justify-end">
        <PaginationContent>
          <PaginationPrevious
            href={`${basePath}?page=${pagination.page - 1}`}
            className={`border ${!pagination.hasPreviousPage ? ' pointer-events-none opacity-50' : ''}`}
          />
          <PaginationNext
            href={`${basePath}?page=${pagination.page + 1}`}
            className={`border ${!pagination.hasNextPage ? ' pointer-events-none opacity-50' : ''}`}
          />
        </PaginationContent>
      </Pagination>
    ) : null

  return (
    <>
      <div className="flex items-center justify-between mx-10 mt-10 h-10">
        {title ? <h1 className="text-2xl font-semibold whitespace-nowrap">{title}</h1> : <span />}
        {paginationContent}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 m-10">
        {products.map((product, index) => (
          <div key={product.id}>
            <ProductCard product={product} priority={index < 2} />
          </div>
        ))}
        {Array.from({ length: PRODUCTS_PER_PAGE - products.length }).map((_, i) => (
          <div key={`placeholder-${i}`} className="invisible">
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </>
  )
}
