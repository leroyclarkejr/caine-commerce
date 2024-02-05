import { ResponsiveImage } from '@/components';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors hover:scale-110 dark:border-neutral-700 dark:text-white">
      <ResponsiveImage
        src="/img/ShoppingCartIconWhite.png"
        maxWidth={36}
        alt="Cart Icon"
        className={clsx('h-4 w-full transition-all ease-in-out  ', className)}
      />

      {quantity ? (
        <span className="absolute right-0 top-0  flex  h-3 w-3 items-center justify-center rounded-full bg-blue-600 p-1 text-[12px] font-medium text-white hover:scale-110 md:h-4 md:w-4">
          {quantity}
        </span>
      ) : null}
    </div>
  );
}
