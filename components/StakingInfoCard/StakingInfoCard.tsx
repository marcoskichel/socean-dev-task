import { Card, CardContent, styled, Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxHeight: '19.25rem',
  backgroundColor: '#0D0D0D',
  [theme.breakpoints.up('md')]: {
    width: '19rem',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const StakingInfoCard = () => {
  return (
    <StyledCard>
      <StyledCardContent>
        <InfoIcon />
        <Typography variant="h6" color="primary">
          How does staking work?
        </Typography>
        <Typography variant="body1">
          Staking allows users to participate in securing the network by locking
          up tokens. Consequently, users are rewarded for securing the network
          in the form of native tokens. The higher the amount of crypto-assets
          you pledge, the higher the rewards you receive. ... This means your
          crypto-assets earn while you sleep!
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default StakingInfoCard;
