import clsx from 'clsx';

import { TxtFontFamily } from '../Txt';

import styles from './Button.module.css';
type IntrinsicButtonProps = JSX.IntrinsicElements['button'];

type ButtonVariant = 'black' | 'white';
type ButtonSize = 'sm' | 'lg';

export interface ButtonProps extends IntrinsicButtonProps {
  variant?: ButtonVariant;
  loading?: boolean;
  size?: ButtonSize;
  fontFamily?: TxtFontFamily;
}

export function Button(props: ButtonProps) {
  const {
    variant = 'black',
    size = 'sm',
    fontFamily = 'vcr',
    ...restProps
  } = props;
  const className = clsx(
    styles.root,
    styles[variant],
    styles[size],
    styles[fontFamily],
    {
      [styles.disabled]: props.disabled,
    },
    props.className
  );
  return (
    <button {...restProps} aria-disabled={props.disabled} className={className}>
      {props.children}
    </button>
  );
}
