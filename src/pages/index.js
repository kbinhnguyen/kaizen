import Head from 'next/head';
import Image from 'next/image';
import TopPanel from '../components/index/top';
import MidPanel from '../components/index/mid';
import BottomPanel from '../components/index/bottom';
import Footer from '../components/shared/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaizen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/_next/static/media/AdobeStock_381853198_resized.8c21bde9.jpeg" />
      </Head>
      <div className="fadeIn">
      <main>
        <TopPanel />
        <MidPanel />
        <BottomPanel />
      </main>
      <Footer />
      </div>
    </>
  )
}
