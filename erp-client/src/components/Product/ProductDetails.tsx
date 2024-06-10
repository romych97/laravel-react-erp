import { useState } from 'react'
import BackToProductButton from '@/ui/buttons/BackToProductButton'
import ProductInfo from '@/components/Product/ProductInfo'
import ProductForm from '@/components/Product/ProductForm'

function ProductDetails({ productData }:any) {
  const [variantPrice, setVariantPrice] = useState(productData.variants.edges[0].node.price)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm 
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges} 
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
    </div>
  )
}

export default ProductDetails
