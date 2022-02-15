import { styled } from '@mui/material';
import { useMemo, useState } from 'react';
import FatButton from '../../components/FatButton/FatButton';
import StakeInput from '../../components/StakeInput/StakeInput';
import UnstakeOptionList from '../../components/UnstakeOptionList/UnstakeOptionList';
import { Currency } from '../../types/Currency';
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
  const formatedFee = 1 - actualFee;
  return {
    ...opt,
    value: stakedValue * formatedFee,
  } as UnstakeOption;
};

const options: Array<Partial<UnstakeOption>> = [
  { id: 'instant', label: 'Instant Unstake', fee: 0.3 },
  { id: 'two-days', label: 'Unstake in ~2 days', fee: 0 },
];

const Unstaker = () => {
  const [amount, setAmount] = useState('0');

  const parsedOptions = useMemo(() => {
    const stakedValue = Number(amount) || 0;
    return options.map((opt) => inferOutcomeOptionFee(opt, stakedValue));
  }, [amount]);

  const [selectedOptionId, setSelectedOptionId] = useState(
    options[options.length - 1].id,
  );

  const handleUnstakeOptionSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  return (
    <Root>
      <StakeInput
        currency={Currency.scnSOL}
        value={amount}
        onChange={handleAmountChange}
      />
      <UnstakeOptionList
        selectedId={selectedOptionId!}
        onChange={handleUnstakeOptionSelect}
        options={parsedOptions}
      />
      <FatButton
        color="secondary"
        variant="contained"
        size="large"
        disableElevation
      >
        Unstake scnSOL
      </FatButton>
    </Root>
  );
};

export default Unstaker;
