import clsx from 'clsx';
import React from 'react';

import styles from './Txt.module.css';

export type TxtFontFamily =
  | 'glyph'
  | 'vcr'
  | 'offBit101'
  | 'offBitDot'
  | 'featureMonoRegular'
  | 'featureMonoMedium'
  | 'featureMonoBold';

export type TxtAlignment = 'left' | 'center' | 'right';

export type TxtElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'div'
  | 'span'
  | 'legend'
  | 'ul';

export type TxtSize =
  | '72'
  | '52'
  | '24'
  | '21'
  | '16'
  | '14'
  | '12'

  
export type TxtColor =
  | 'black'
  | 'white'
  | 'gray'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue';

interface TxtProps extends JSX.IntrinsicAttributes {
  fontFamily?: TxtFontFamily;
  align?: TxtAlignment;
  as?: TxtElement;
  size?: TxtSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: TxtColor;
  underline?: boolean;
}

export function Txt(props: TxtProps): JSX.Element {
  const {
    fontFamily = 'vcr',
    as = 'p',
    size = '16',
    align,
    color = 'white',
    className,
    underline = 'false',
    ...elementProps
  } = props;

  const cssClass = clsx(
    styles.root,
    styles[fontFamily],
    styles[color],
    styles[`size-${size}`],
    align ? styles[align] : undefined,
    styles[as],
    { [styles.underline]: underline ? true : false },
    className
  );

  const Component: TxtElement = as;
  return (
    <Component style={props.style} className={cssClass} {...elementProps}>
      {props.children}
    </Component>
  );
}
