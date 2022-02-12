import { Container } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import LiveStats from '../containers/LiveStats/LiveStats';
import LiveStatsProvider from '../providers/LiveStatsProvider';

const Home: NextPage = () => {
  return (
    <LiveStatsProvider>
      <div>
        <Head>
          <title>Socean</title>
          <meta name="description" content="Socean stake" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container sx={{ paddingTop: '4rem' }}>
          <LiveStats />
        </Container>
      </div>
    </LiveStatsProvider>
  );
};

export default Home;
