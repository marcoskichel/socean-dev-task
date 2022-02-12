import { Box, Container, styled } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import TabbedCard from '../components/TabbedCard/TabbedCard';
import LiveStats from '../containers/LiveStats/LiveStats';
import LiveStatsProvider from '../providers/LiveStatsProvider';

const Main = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4rem',
  gap: '6rem',
}));

const TabbedCardContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Socean</title>
        <meta name="description" content="Socean stake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <LiveStatsProvider>
          <LiveStats />
        </LiveStatsProvider>
        <TabbedCardContainer>
          <div />
          <Box sx={{ width: '33rem' }}>
            <TabbedCard
              tabs={[
                { label: 'One', Component: () => <div>One</div> },
                { label: 'Two', Component: () => <div>Two</div> },
              ]}
            />
          </Box>
          <div />
        </TabbedCardContainer>
      </Main>
    </div>
  );
};

export default Home;
