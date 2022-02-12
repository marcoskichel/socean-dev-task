import type { NextPage } from 'next';
import Head from 'next/head';
import LiveStats from '../containers/LiveStats/LiveStats';
import LiveStatsProvider from '../providers/LiveStatsProvider';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <LiveStatsProvider>
      <div className={styles.container}>
        <Head>
          <title>Socean</title>
          <meta name="description" content="Socean stake" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <LiveStats />
        </main>
      </div>
    </LiveStatsProvider>
  );
};

export default Home;
