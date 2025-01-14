'use client';

import { Txt } from '@/components';
import clsx from 'clsx';
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { ResponsiveImage } from '../ResponsiveImage';
import moment from 'moment-timezone';
import styles from './home-hero.module.css';

function updateTime(setCurrentTime: React.Dispatch<React.SetStateAction<string>>) {
  setCurrentTime(moment().tz('EST').format('MM[.]D[.]YY - h:mm:ss a'));
  requestAnimationFrame(() => updateTime(setCurrentTime));
}

export function HomeHero() {
  const [isClientSideHydrated, setIsClientSideHydrated] = useState(false);

  useEffect(() => {
    setIsClientSideHydrated(true);
  }, []);

  if (!isClientSideHydrated) {
    return null;
  }

  // const [currentTime, setCurrentTime] = useState(
  //   moment().format('MM[.]D[.]YY - h:mm:ss a')
  // );

  // useEffect(() => {
  //   if (typeof window === 'undefined') {
  //     return;
  //   }
  //   // Update the clock every second
  //   const interval = setInterval(() => {
  //     setCurrentTime(moment().format('MM[.]D[.]YY - h:mm:ss a'));
  //   }, 1000);

  //   // Cleanup function to clear interval when component is unmounted
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <section
      className={clsx(
        styles.section,
        'relative mb-9 flex h-full w-full flex-col items-center justify-center overflow-hidden px-0 py-6'
      )}
    >
      <Suspense>
        <HeroVideo />
      </Suspense>
    </section>
  );
}

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(
    moment().tz('UTC').format('MM[.]D[.]YY - h:mm:ss a')
  );

  useLayoutEffect(() => {
    updateTime(setCurrentTime);
  }, [currentTime]);

  return (
    <>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        loop
        playsInline
        className="mb-4"
        preload="metadata"
      >
        <source src="/videos/infrared-video.mp4"></source>
      </video>
      <div className={clsx(styles.heatBar, 'mb-1.5 mt-6 h-4 ')}></div>
      <Txt size="24" className={styles.title}>
        {currentTime}
      </Txt>
    </>
  );
};
