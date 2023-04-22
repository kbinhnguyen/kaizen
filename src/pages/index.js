import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import TopPanel from '../components/index/top';
import MidPanel from '../components/index/mid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaizen</title>
        <meta name="description" content="Plan for tomorrow.Today" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TopPanel />
        <MidPanel />
      </main>
    </>
  )
}
