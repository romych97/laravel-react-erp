// import { CartProvider } from '@/context/Store'
import { CartProvider } from '@/context/Store'
import Footer from '../Footer/Footer'
import Header from '../Header'
import React from 'react';
import CatalogSidebar from '../Sidebar/CatalogSidebar';

function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header sidebarOpen={void (0)} setSidebarOpen={void (0) as any} />
        <main className="container mx-auto">
          <div className='flex'>
            <CatalogSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {children}

          </div>
        </main>
      </div>
      <Footer />
    </CartProvider>
  )
}

export default Layout
