import { Skeleton } from '../ui/skeleton'
import { Card, CardContent } from '../ui/card'

export const ProductCardSkeleton = () => (
  <Card className="w-full h-fit gap-4 overflow-hidden border border-gray-200 max-w-[400px] mx-auto">
    <Skeleton className="aspect-square w-full rounded-none" />
    <CardContent className="p-3 space-y-0.5 flex flex-col justify-between">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-5 w-1/4 self-end" />
    </CardContent>
  </Card>
)
