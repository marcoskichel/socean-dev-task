import { Box, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CurrencyIcon from '../../components/CurrencyIcon/CurrencyIcon';
import FatButton from '../../components/FatButton/FatButton';
import StakeInput from '../../components/StakeInput/StakeInput';
import { Currency } from '../../types/Currency';

const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
  gap: '1.5rem',
}));

const OutcomeWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.25rem',
  padding: '0 0.5rem 0 0',
  height: '1rem',
  '> div': {
    lineHeight: '2rem',
    display: 'flex',
    gap: '1rem',
  },
  span: {
    fontSize: '1rem',
  },
}));

const Outcome = ({ value }: { value: string }) => {
  return (
    <OutcomeWrapper>
      <Typography variant="caption">You will get</Typography>
      <Box>
        <Typography variant="caption">{value} scnSOL</Typography>
        <CurrencyIcon
          sx={{ paddingRight: 0 }}
          height={26}
          width={26}
          currency={Currency.scnSOL}
        />
      </Box>
    </OutcomeWrapper>
  );
};

const Staker = () => {
  const [amount, setAmount] = useState('0');
  const [outcome, setOutcome] = useState('0');

  const handleChange = (value: string) => {
    setAmount(value);
  };

  useEffect(() => {
    const parsedAmount = Number(amount) || 0;
    const parsedOutcome = parsedAmount * 0.976;
    setOutcome(parsedOutcome.toString());
  }, [amount]);

  return (
    <Root>
      <StakeInput
        currency={Currency.SOL}
        value={amount}
        onChange={handleChange}
      />
      <Outcome value={outcome} />
      <FatButton
        color="secondary"
        variant="contained"
        size="large"
        disableElevation
      >
        Connect Wallet
      </FatButton>
    </Root>
  );
};

export default Staker;
