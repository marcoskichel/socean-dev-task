import { Checkbox, ListItemButton, styled, Typography } from '@mui/material';
import { Currency } from '../../types/Currency';
import { UnstakeOption } from '../../types/UnstakeOption';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

const Wrapper = styled('div')(() => ({
  width: '100%',
  position: 'relative',
}));

const Content = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const Description = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const OutcomeOptionCheckbox = styled(Checkbox)(() => ({
  position: 'absolute',
  right: '0',
  top: '1rem',
}));

const Value = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '1.5rem',
  marginRight: '1rem',
}));

const StyledListItem = styled(ListItemButton)(() => ({
  '&.Mui-selected': {
    background: 'rgba(242, 79, 131, 0.1)',
    border: '1px solid rgba(242, 79, 131, 0.75)',
  },
}));

type Props = UnstakeOption & {
  id: string;
  selected: boolean;
  onSelect: (value: string) => void;
};

const UnstakeOptionListItem = (props: Props) => {
  const { id, label, fee, value, selected, onSelect } = props;

  const handleSelect = () => {
    onSelect(id);
  };

  return (
    <StyledListItem selected={selected} onClick={handleSelect}>
      <Wrapper>
        <Content>
          <Typography variant="caption">{label}</Typography>
          <Description>
            <CurrencyIcon
              sx={{ padding: 0, marginRight: '0.5rem' }}
              height={26}
              width={26}
              currency={Currency.SOL}
            />
            <Value variant="h5">{`${parseFloat(value.toString())} SOL`}</Value>
            <Typography variant="caption">{`${fee}% fee`}</Typography>
          </Description>
        </Content>
        <OutcomeOptionCheckbox
          color="secondary"
          onSelect={handleSelect}
          checked={selected}
        />
      </Wrapper>
    </StyledListItem>
  );
};

export default UnstakeOptionListItem;
