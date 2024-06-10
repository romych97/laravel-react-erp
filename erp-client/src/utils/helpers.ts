// import { createCheckout, updateCheckout } from '@/lib/shopify'
const localStorageName = process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME as any;
export function saveLocalData(cart:any, checkoutId:any, checkoutUrl:any) {
  localStorage.setItem(localStorageName, JSON.stringify([cart, checkoutId, checkoutUrl]))
}

function getLocalData() {
  return JSON.parse(localStorage.getItem(localStorageName) as any)
}

export function setLocalData(setCart:any, setCheckoutId:any, setCheckoutUrl:any) {
  const localData = getLocalData()

  if (localData) {
    if (Array.isArray(localData[0])) {
      setCart([...localData[0]])
    }
    else {
      setCart([localData[0]])
    }
    setCheckoutId(localData[1])
    setCheckoutUrl(localData[2])
  }
}

export async function createShopifyCheckout(newItem:any) {
  // const data = await createCheckout( newItem['variantId'], newItem['variantQuantity'])  
  const data = [] as any;
  return data
}

export async function updateShopifyCheckout(updatedCart:any, checkoutId:any) {
  const lineItems = updatedCart.map((item:any) => {
    return {
      variantId: item['variantId'],
      quantity: item['variantQuantity']
    }
  })
  // await updateCheckout(checkoutId, lineItems)
}

export function getCartSubTotal(cart:any) {
  if (cart.length === 0) {
    return 0
  }
  else {
    let totalPrice = 0
    cart.forEach((item:any) => totalPrice += parseInt(item.variantQuantity) * parseFloat(item.variantPrice))
    return Math.round(totalPrice * 100) / 100
  }
}