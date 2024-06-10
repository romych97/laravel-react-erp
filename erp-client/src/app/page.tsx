"use client";

import Layout from '@/components/Layouts/Layout'; 
import SEO from '@/components/Seo/SEO';
import '@/css/globals.css';
import { AppProps } from 'next/app';
import { FC } from 'react';
import CatalogPage from './catalog/page';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  console.log("file: page.tsx:10 - App - Component:", Component);
  return (
    <Layout>
      <SEO 
        title={process.env.siteTitle}
      />
      {/* <Component {...pageProps} /> */}
      <CatalogPage />
    </Layout>
  );
}

export default App;
