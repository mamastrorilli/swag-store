'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Category } from '@/types'
import { DialogTitle } from '../ui/dialog'
import { VisuallyHidden } from 'radix-ui'

export default function MobileMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden text-white" aria-label="Open menu">
          <MenuIcon size={22} color="black" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="backdrop-blur-md bg-white/70">
        <VisuallyHidden.Root>
          <DialogTitle>Menu</DialogTitle>
        </VisuallyHidden.Root>
        <nav className="mt-8 flex flex-col">
          <Link href="/products" className="px-4 py-3 text-sm " onClick={() => setOpen(false)}>
            All Products
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="px-4 py-3 text-sm "
              onClick={() => setOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
