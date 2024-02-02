'use client';

import { Txt } from '@/components';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
    <section className={styles.section}>
      <HeroVideo />
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
      <div className={styles.heatBar}></div>
      <Txt size="24" className={styles.title}>
        {currentTime}
      </Txt>
    </>
  );
};
