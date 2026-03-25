import { Button } from '../ui/button'
import { ButtonGroup, ButtonGroupText } from '../ui/button-group'
import { Minus, Plus } from 'lucide-react'

export const AddToCartButtonSkeleton = () => {
  return (
    <div className="flex flex-row gap-3">
      <ButtonGroup>
        <Button variant="outline" size="lg" disabled>
          <Minus className="size-4" />
        </Button>
        <ButtonGroupText className="px-5 text-base">1</ButtonGroupText>
        <Button variant="outline" size="lg" disabled>
          <Plus className="size-4" />
        </Button>
      </ButtonGroup>
      <Button size="lg" className="flex-1" disabled>
        Add to Cart
      </Button>
    </div>
  )
}
