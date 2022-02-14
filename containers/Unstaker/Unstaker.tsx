import { styled } from '@mui/material';
import { useMemo, useState } from 'react';
import { Currency } from '../../components/CurrencyIcon/CurrencyIcon';
import FatButton from '../../components/FatButton/FatButton';
import StakeInput from '../../components/StakeInput/StakeInput';
import UnstakeOptionList from '../../components/UnstakeOptionList/UnstakeOptionList';
import { UnstakeOption } from '../../types/UnstakeOption';

const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
  gap: '2rem',
}));

const inferOutcomeOptionFee = (
  opt: Partial<UnstakeOption>,
  stakedValue: number,
) => {
  const actualFee = opt.fee! / 100;
  return {
    ...opt,
    value: stakedValue * (1 - actualFee),
  } as UnstakeOption;
};

const options: Array<Partial<UnstakeOption>> = [
  { label: 'Instant Unstake', fee: 0.3 },
  { label: 'Unstake in ~2 days', fee: 0 },
];

const Unstaker = () => {
  const [amount, setAmount] = useState('0');

  const parsedOptions = useMemo(() => {
    const stakedValue = Number(amount) || 0;
    return options.map((opt) => inferOutcomeOptionFee(opt, stakedValue));
  }, [amount]);

  const handleChange = (value: string) => {
    setAmount(value);
  };

  return (
    <Root>
      <StakeInput
        currency={Currency.scnSOL}
        value={amount}
        onChange={handleChange}
      />
      <UnstakeOptionList options={parsedOptions} />
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

export default Unstaker;
