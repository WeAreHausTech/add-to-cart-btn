import  { Suspense } from 'react'
import  AddToCartButtonWidget from './AddToCartButton'

const addToCartButtonWidget = () => {
  console.log('hello from store-front')

  return (
    <Suspense>
      <AddToCartButtonWidget />
    </Suspense>
  );
};

export default addToCartButtonWidget;
