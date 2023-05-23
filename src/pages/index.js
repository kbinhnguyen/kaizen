import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TopPanel from '../components/index/top';
import MidPanel from '../components/index/mid';
import BottomPanel from '../components/index/bottom';
import Footer from '../components/shared/Footer';

export default function Home() {
  const addClassName = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn', 'delayAnimation');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(addClassName, {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    });

    const changeOpacity = (target) => {
      target.style.opacity = 1;
    };

    const observerTargets = document.querySelectorAll('.eleToWatch');
    observerTargets.forEach(target => {
      observer.observe(target);
      target.addEventListener('animationend', () => changeOpacity(target));
    });

    return () => {
      observerTargets.forEach(target => {
        target.removeEventListener('animationend', () => changeOpacity(target));
      })
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kaizen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/_next/static/media/AdobeStock_381853198_resized.8c21bde9.jpeg" />
      </Head>
      {/* <div id="watchTarget"> */}
      <main>
        <TopPanel />
        <MidPanel />
        <BottomPanel />
      </main>
      <Footer />
      {/* </div> */}
    </>
  )
}
