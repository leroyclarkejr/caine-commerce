import classNames from 'classnames';
import React from 'react';

import styles from './Txt.module.scss';

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

export type TxtVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'label';

export const TxtVariantMapping: Record<TxtVariant, TxtElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h2',
  subtitle2: 'h2',
  body1: 'span',
  body2: 'span',
  caption: 'span',
  label: 'span',
};

//create a type of all the colors available in my variables.scss file
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
  variant?: TxtVariant;
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
    variant = 'body1',
    align,
    color = 'white',
    className,
    underline = 'false',
    ...elementProps
  } = props;

  const cssClass = classNames(
    styles.root,
    align ? styles[align] : undefined,
    styles[variant],
    styles[fontFamily],
    styles[color],
    { [styles.underline]: underline === true ? true : false },
    className
  );

  const Component: TxtElement = as;
  return (
    <Component style={props.style} className={cssClass} {...elementProps}>
      {props.children}
    </Component>
  );
}
