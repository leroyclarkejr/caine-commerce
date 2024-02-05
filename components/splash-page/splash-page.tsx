import { useEffect, useState } from 'react';

import { Button, ResponsiveImage, Txt } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './SplashPage.module.css';

interface SplashPageProps {
  onEnterClick?: () => void | undefined;
  isVisible: boolean;
}

export function SplashPage(props: SplashPageProps) {
  const { onEnterClick, isVisible, ...restProps } = props;
  const [hasImgLoaded, setHasImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setHasImageLoaded(true);
  };

  const handleEnter = () => {
    onEnterClick?.();
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.2 } }
  };

  useEffect(() => {
    // if (typeof window === undefined) {
    //   return;
    // }
    const body = document.querySelector('body');
    if (!body) return;
    if (isVisible) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'scroll';
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.root}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          {...restProps}
        >
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={hasImgLoaded ? 'visible' : 'hidden'}
          >
            <ResponsiveImage
              src="/img/EARTH_FULL.png"
              alt="Earth"
              className={styles.img}
              maxWidth={710}
              onLoad={handleImageLoad}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={hasImgLoaded ? 'visible' : 'hidden'}
            className={styles.copy}
          >
            <Txt align="center" as="p">
              Welcome to the gateway: a convergence of space & time.
              <br />
              Join us as we monitor the vessel.
            </Txt>
            <Button onClick={handleEnter}>Enter</Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
