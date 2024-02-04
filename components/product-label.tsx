import clsx from 'clsx';
import Price from './price';

interface ProductLabelProps {
  title: string;
  amount: string;
  currencyCode: string;
}
/**
 * Label for product tile. Includes title and price.
 */
const ProductLabel = (props: ProductLabelProps) => {
  const { title, amount, currencyCode } = props;
  return (
    <div className={clsx('py-8-4 absolute bottom-0 left-0 flex w-full @container/label')}>
      <div className=" w-full bg-white/70 p-1 text-sm  text-black  dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="block flex-none  p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default ProductLabel;
