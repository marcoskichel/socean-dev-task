import { Box, Container, styled, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import TabbedCard from '../components/TabbedCard/TabbedCard';
import LiveStats from '../containers/LiveStats/LiveStats';
import Staker from '../containers/Staker/Staker';
import LiveStatsProvider from '../providers/LiveStatsProvider';

const Main = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4rem',
}));

const TabbedCardContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

const PageHeaderContainer = styled('div')(() => ({
  maxWidth: '24.5rem',
  textAlign: 'center',
  margin: '0 auto',
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

        <PageHeaderContainer>
          <Typography variant="h1">Stake SOL and Earn 6% APY</Typography>
        </PageHeaderContainer>

        <TabbedCardContainer>
          <div />
          <Box sx={{ width: '33rem' }}>
            <TabbedCard
              tabs={[
                { label: 'Stake', Component: Staker },
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
