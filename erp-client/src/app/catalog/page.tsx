'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layouts/Layout';
import SEO from '@/components/Seo/SEO';
import { getProductsService } from '@/services/products/products';
import ProductCard from '@/components/Product/ProductCard';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductsService() as any;
      console.log("file: catalog.tsx:14 - fetchProducts - response:", response);
      setProducts(response.data.payload)
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="">
        <div className="mx-auto py-4 sm:px-6 sm:py-4 lg:max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {
              products.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
