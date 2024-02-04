import { ProductTile } from 'components/grid/product-tile';
import { getProducts } from 'lib/shopify';
import Link from 'next/link';
/**
 *
 * Query all products and display them in a grid.
 */
export async function AllProductsGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getProducts({});

  if (!homepageItems) return null;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      {homepageItems.map((item, index) => {
        return (
          <div className={'md:col-span-2 md:row-span-1'} key={`product-${index}`}>
            <Link
              className="relative block aspect-square h-full w-full"
              href={`/product/${item.handle}`}
            >
              <ProductTile
                src={item.featuredImage.url}
                fill
                sizes={'(min-width: 768px) 33vw, 100vw'}
                priority={true}
                alt={item.title}
                label={{
                  title: item.title as string,
                  amount: item.priceRange.maxVariantPrice.amount,
                  currencyCode: item.priceRange.maxVariantPrice.currencyCode
                }}
                containerClassName="relative block aspect-square h-full w-full"
              />
            </Link>
          </div>
        );
      })}
    </section>
  );
}
