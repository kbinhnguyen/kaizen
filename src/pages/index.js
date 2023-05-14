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
      </Head>
      <main>
        <TopPanel />
        <MidPanel />
        <BottomPanel />
        <Footer />
      </main>
    </>
  )
}
