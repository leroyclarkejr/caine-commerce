
import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import styles from './ResponsiveImage.module.css';

export interface ResponsiveImageProps extends ImageProps {
  maxWidth?: number | [number];
  width?: number;
  height?: number;
  /** Pass props to image container */
  containerProps?: string;
}

export function ResponsiveImage(props: ResponsiveImageProps) {
  const {
    maxWidth,
    alt = 'Default',
    width = 2,
    height = 3,
    containerProps,
    ...imageProps
  } = props;

  return (
    <div
      className={classNames(styles.root, containerProps)}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <Image
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        {...imageProps}
      />
    </div>
  );
}
