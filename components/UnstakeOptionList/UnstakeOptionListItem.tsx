import { Checkbox, ListItemButton, styled, Typography } from '@mui/material';
import { UnstakeOption } from '../../types/UnstakeOption';
import CurrencyIcon, { Currency } from '../CurrencyIcon/CurrencyIcon';

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

const UnstakeOptionListItem = (props: UnstakeOption) => {
  const { label, fee, value } = props;

  return (
    <ListItemButton key={label}>
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
            <Value variant="h5">{`${parseFloat(value.toFixed(2))} SOL`}</Value>
            <Typography variant="caption">{`${fee}% fee`}</Typography>
          </Description>
        </Content>
        <OutcomeOptionCheckbox color="secondary" />
      </Wrapper>
    </ListItemButton>
  );
};

export default UnstakeOptionListItem;
