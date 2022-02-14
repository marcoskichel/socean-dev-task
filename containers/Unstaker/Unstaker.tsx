import {
  List,
  styled,
  Typography,
  Checkbox,
  ListItemButton,
} from '@mui/material';
import { useMemo, useState } from 'react';
import CurrencyIcon, {
  Currency,
} from '../../components/CurrencyIcon/CurrencyIcon';
import FatButton from '../../components/FatButton/FatButton';
import StakeInput from '../../components/StakeInput/StakeInput';

const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
  gap: '1.5rem',
}));

const OutcomeSelectorOptionWrapper = styled('div')(() => ({
  width: '100%',
  position: 'relative',
}));

const OutcomeSelectorOptionContentWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const OutcomeSelectorContentDescription = styled('div')(() => ({
  display: 'flex',
}));

const OutcomeOptionCheckbox = styled(Checkbox)(() => ({
  position: 'absolute',
  right: '0',
  top: '1rem',
}));

interface OutcomeOption {
  label: string;
  fee: number;
  value: number;
}

interface OutcomeSelectorProps {
  options: OutcomeOption[];
}

const OutcomeSelector = (props: OutcomeSelectorProps) => {
  const { options } = props;
  return (
    <List>
      {options.map(({ label, fee, value }) => (
        <ListItemButton key={label}>
          <OutcomeSelectorOptionWrapper>
            <OutcomeSelectorOptionContentWrapper>
              <Typography variant="caption">{label}</Typography>
              <OutcomeSelectorContentDescription>
                <CurrencyIcon
                  sx={{ paddingRight: 0 }}
                  height={26}
                  width={26}
                  currency={Currency.SOL}
                />
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {`${parseFloat(value.toFixed(2))} SOL`}
                </Typography>
                <Typography variant="caption">{`${fee}% fee`}</Typography>
              </OutcomeSelectorContentDescription>
            </OutcomeSelectorOptionContentWrapper>
            <OutcomeOptionCheckbox color="secondary" />
          </OutcomeSelectorOptionWrapper>
        </ListItemButton>
      ))}
    </List>
  );
};

const inferOutcomeOptionFee = (
  opt: Partial<OutcomeOption>,
  stakedValue: number,
) => {
  const actualFee = opt.fee! / 100;
  return {
    ...opt,
    value: stakedValue * (1 - actualFee),
  } as OutcomeOption;
};

const options: Array<Partial<OutcomeOption>> = [
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
      <OutcomeSelector options={parsedOptions} />
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
