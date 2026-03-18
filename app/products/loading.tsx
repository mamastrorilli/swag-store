import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 m-10">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-lg border border-gray-200">
          <Skeleton className="aspect-square w-full" />
          <div className="p-3 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-5 w-12 self-end ml-auto" />
          </div>
        </div>
      ))}
    </div>
  )
}
