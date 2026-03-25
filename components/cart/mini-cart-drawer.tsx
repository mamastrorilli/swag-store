'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useCart } from './cart-context'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Loader2, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'

export default function MiniCartDrawer() {
  const { cart, isOpen, closeCart, removeItem, updateItem } = useCart()
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const isEmpty = !cart || cart.items.length === 0

  async function handleRemove(productId: string) {
    setLoadingId(productId)
    await removeItem(productId)
    setLoadingId(null)
  }

  async function handleUpdate(productId: string, quantity: number) {
    setLoadingId(productId)
    await updateItem(productId, quantity)
    setLoadingId(null)
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">
            Your Cart {cart && cart.totalItems > 0 && `(${cart.totalItems})`}
          </SheetTitle>
        </SheetHeader>

        <Separator />

        <div className="flex-1 overflow-y-auto py-2">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-muted-foreground py-16">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4 px-4">
              {cart.items.map((item) => (
                <li key={item.productId} className="flex gap-4 items-start">
                  {/* Immagine prodotto */}
                  <div className="border border-border rounded-lg overflow-hidden shrink-0 bg-muted">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={72}
                      height={72}
                      className="object-contain w-[72px] h-[72px]"
                    />
                  </div>

                  {/* Dettagli */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-base leading-tight truncate">
                        {item.product.name}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.productId)}
                        disabled={loadingId === item.productId}
                        className="shrink-0 text-muted-foreground hover:text-destructive"
                      >
                        {loadingId === item.productId
                          ? <Loader2 className="size-4 animate-spin" />
                          : <Trash2 className="size-4" />
                        }
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground capitalize">
                      {item.product.category}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleUpdate(item.productId, item.quantity - 1)}
                          disabled={item.quantity <= 1 || loadingId === item.productId}
                          className="size-6"
                        >
                          <Minus className="size-3" />
                        </Button>
                        <span className="text-sm text-muted-foreground w-5 text-center">
                          {loadingId === item.productId
                            ? <Loader2 className="size-3 animate-spin inline" />
                            : item.quantity
                          }
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleUpdate(item.productId, item.quantity + 1)}
                          disabled={loadingId === item.productId}
                          className="size-6"
                        >
                          <Plus className="size-3" />
                        </Button>
                      </div>
                      <span className="text-base font-semibold">
                        ${(item.lineTotal / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isEmpty && (
          <>
            <Separator />
            <SheetFooter className="px-4 pb-4">
              <div className="flex justify-between items-center w-full mb-3">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-base font-semibold">
                  ${((cart?.subtotal ?? 0) / 100).toFixed(2)}
                </span>
              </div>
              <Button size="lg" className="w-full" onClick={() => {}}>
                Complete Payment
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
