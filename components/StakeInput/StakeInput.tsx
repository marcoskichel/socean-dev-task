import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Button,
  InputLabel,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Currency } from '../../types/Currency';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

// Styles

const Wrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
}));

const StyledTextField = styled(TextField)(() => ({
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  'input[type=number]': {
    MozAppearance: 'textfield',
    fontSize: '1.5rem',
    color: '#A7A7A7',
  },
  '.MuiInputBase-root': {
    backgroundColor: '#1C1C1C',
    height: '7rem',
    alignItems: 'end',
    borderRadius: '0.75rem',
  },
  '.MuiInputLabel-formControl': {
    top: '-1.5rem',
  },
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: '1rem',
  left: '1rem',
  color: theme.palette.primary.main,
}));

const EndAdornmentWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '90%',
  justifyContent: 'space-around',
  paddingBottom: '0.5rem',
}));

const ArrowDownWrapper = styled('div')(() => ({
  position: 'absolute',
  left: 'calc(50% - 1.75rem)',
  bottom: '-1.75rem',
  width: '3.5rem',
  height: '3.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#232323',
  borderRadius: '50%',
  border: '1px solid rgba(255, 255, 255, 0.23);',
  zIndex: 1,
}));

// Components

const ArrowDown = () => {
  return (
    <ArrowDownWrapper>
      <ArrowDownwardIcon />
    </ArrowDownWrapper>
  );
};

interface Props {
  value?: string;
  currency?: Currency;
  onChange?: (value: string) => void;
}

/**
 * A stlyled text field with an arrow down icon and a currency icon prefix.
 */
const StakeInput = (props: Props) => {
  const { onChange = () => {}, value = '0', currency = Currency.SOL } = props;

  /**
   * Avoid negative values as MUI doesn't support HTML min attribute.
   * @param event The event object
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      let value = Number(event.target.value);
      if (value < 0) {
        value = 0;
      }
      onChange(value.toString());
    } else {
      onChange('');
    }
  };

  const startAdornment = <CurrencyIcon currency={currency} />;

  const endAdornment = (
    <EndAdornmentWrapper>
      <Typography variant="caption" sx={{ whiteSpace: 'pre' }}>
        Balance: -
      </Typography>
      <Button
        variant="contained"
        size="small"
        disableElevation
        color="secondary"
        sx={{ background: 'rgba(255, 255, 255, 0.08)' }}
      >
        MAX
      </Button>
    </EndAdornmentWrapper>
  );

  return (
    <Wrapper>
      <StyledInputLabel>Amount</StyledInputLabel>
      <StyledTextField
        value={value}
        variant="outlined"
        type="number"
        onChange={handleChange}
        sx={{ width: '100%' }}
        InputProps={{
          startAdornment,
          endAdornment,
        }}
      />
      <ArrowDown />
    </Wrapper>
  );
};

export default StakeInput;
