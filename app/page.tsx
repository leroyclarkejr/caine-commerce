import { HomeHero } from '@/components';
import { AllProductsGrid } from '@/components/grid/all-products-grid';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <HomeHero />
      </Suspense>
      <Suspense>
        <AllProductsGrid />
      </Suspense>
    </>
  );
}
