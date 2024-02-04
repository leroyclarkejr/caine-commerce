import clsx from 'clsx';
import Image from 'next/image';
import Label from '../product-label';

export interface ProductLabelProps {
  title: string;
  amount: number;
  currencyCode: string;
}

export interface ProductTileProps extends React.ComponentProps<typeof Image> {
  active?: boolean;
  containerClassName?: string;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
  };
}

/**
 * Product tile with image and label, wrapped in a link.
 */
export function ProductTile(props: ProductTileProps) {
  const { label, active, containerClassName, ...restProps } = props;

  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        },
        containerClassName
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': true
          })}
          {...restProps}
        />
      ) : null}
      {label ? (
        <Label title={label.title} amount={label.amount} currencyCode={label.currencyCode} />
      ) : null}
    </div>
  );
}
