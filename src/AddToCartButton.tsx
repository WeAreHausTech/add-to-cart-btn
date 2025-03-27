import { productChannel, useEventBusEmit, useEventBusOn } from '@haus-storefront/core'
import { AddToCartButton } from '@haus-storefront/add-to-cart-btn'
import { useProductDetail } from '@haus-storefront/hooks'

const AddToCartButtonWidget = () => {
  const { data: product } = useProductDetail({ id: '2' })
  const emitSelectedProductVariant = useEventBusEmit(productChannel, 'product:variant:selected')
  const [selectedProductVariant] = useEventBusOn(productChannel, 'product:variant:selected')

  console.log('hello from store-front')  

  console.log('selectedProductVariant', selectedProductVariant)

  if (!selectedProductVariant) {
    if (product && product.variants.length) {
      emitSelectedProductVariant(product.variants[0])
    }

    return <div>Product variant not selected</div>
  }
  return <AddToCartButton productVariant={selectedProductVariant} />
}

export default AddToCartButtonWidget
