import { Box, Container, styled, Typography, Chip } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import StakingInfoCard from '../components/StakingInfoCard/StakingInfoCard';
import TabbedCard from '../components/TabbedCard/TabbedCard';
import LiveStats from '../containers/LiveStats/LiveStats';
import Staker from '../containers/Staker/Staker';
import Unstaker from '../containers/Unstaker/Unstaker';
import LiveStatsProvider from '../providers/LiveStatsProvider';

// Styles

const Main = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 0',
}));

const ContentSection = styled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'right',
  gap: '1rem',
  flexDirection: 'column',
  padding: '0 1.5rem',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
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
  marginBottom: '0.75rem',
}));

const FooterLabel = styled(Typography)(() => ({
  fontWeight: 400,
  color: '#A7A7A7',
  fontSize: '1rem',
}));

const FooterValue = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '1rem',
}));

const StakeLabelWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '0.75rem',
}));

const StyledChip = styled(Chip)(() => ({
  backgroundColor: '#22392F',
  color: '#17FF9E',
  fontSize: '0.75rem',
}));

// Components

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

const StakeLabel = () => {
  return (
    <StakeLabelWrapper>
      <Box>Stake</Box>
      <StyledChip label="~6% APY" size="small" />
    </StakeLabelWrapper>
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

        <ContentSection>
          <Box>
            <TabbedCard
              tabs={[
                { label: <StakeLabel />, Component: Staker },
                { label: 'Unstake', Component: Unstaker },
              ]}
            />
            <Footer />
          </Box>
          <StakingInfoCard />
        </ContentSection>
      </Main>
    </div>
  );
};

export default Home;
