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
  padding: '4rem 0',
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

const FooterContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.25rem',
}));

const FooterItem = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
}));

const FooterLabel = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '1.125rem',
}));

const FooterValue = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '1.125rem',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <FooterLabel>Exchange rate:</FooterLabel>
        <FooterValue>1 SOL = 0.976 scnSOL</FooterValue>
      </FooterItem>
      <FooterItem>
        <FooterLabel>Deposit fees:</FooterLabel>
        <FooterValue>0.15%</FooterValue>
      </FooterItem>
    </FooterContainer>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Socean</title>
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
            <Footer />
          </Box>
          <div />
        </TabbedCardContainer>
      </Main>
    </div>
  );
};

export default Home;
