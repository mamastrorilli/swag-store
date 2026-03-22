import Hero from '@/components/layout/hero'
import HomepageCarousel from '@/components/product/homepage-carousel'
import { ProductCarouselSkeleton } from '@/components/product/product-carousel.skeleton'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <main className="w-full">
      <Hero />
      <section className="container mx-auto px-4 lg:px-16 py-16">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-mono mb-8">
          Featured Products
        </h2>
        <Suspense fallback={<ProductCarouselSkeleton />}>
          <HomepageCarousel />
        </Suspense>
      </section>
    </main>
  )
}
