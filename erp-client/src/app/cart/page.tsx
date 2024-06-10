import SEO from '@/components/Seo/SEO'
import PageTitle from '@/components/Seo/PageTitle'
import CartTable from '@/components/Tables/CartTable'
import CheckOutButton from '@/ui/buttons/CheckOutButton'
import BackToProductButton from '@/ui/buttons/BackToProductButton'
import { useCartContext } from '@/context/Store'

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  const [cart, checkoutUrl] = useCartContext() as any

  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <PageTitle text="Your Cart" />
      <CartTable
        cart={cart}
      />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton webUrl={checkoutUrl} />
        <BackToProductButton />
      </div>

    </div>
  )
}

export default CartPage
