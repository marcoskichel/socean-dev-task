import { Button, styled } from '@mui/material';
import { useState } from 'react';
import { Currency } from '../../components/CurrencyIcon/CurrencyIcon';
import StakeInput from '../../components/StakeInput/StakeInput';

const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
  gap: '1.5rem',
}));

const Staker = () => {
  const [amount, setAmount] = useState('0.0');

  const handleChange = (value: string) => {
    setAmount(value);
  };

  return (
    <Root>
      <StakeInput
        currency={Currency.SOL}
        value={amount}
        onChange={handleChange}
      />
      <Button
        color="secondary"
        variant="contained"
        size="large"
        disableElevation
      >
        Connect Wallet
      </Button>
    </Root>
  );
};

export default Staker;
