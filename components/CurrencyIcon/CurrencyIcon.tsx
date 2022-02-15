import { styled, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import { Currency } from '../../types/Currency';

const Wrapper = styled('div')(() => ({
  paddingBottom: '0.9rem',
  paddingRight: '0.9rem',
}));

interface Props {
  currency: Currency;
  height?: number;
  width?: number;
  sx?: SxProps<Theme>;
}

const getSrc = (currency: Currency) => {
  switch (currency) {
    case Currency.SOL:
      return '/icon_SOL.png';
    case Currency.scnSOL:
      return '/icon_scnSOL.png';
    default:
      throw new Error(`Image not found for the desired currency: ${currency}`);
  }
};

const CurrencyIcon = (props: Props) => {
  const { currency, sx, height = 32, width = 32 } = props;
  const src = getSrc(currency);
  return (
    <Wrapper sx={sx}>
      <Image
        src={src}
        alt="Currency"
        width={width}
        height={height}
        layout="fixed"
      />
    </Wrapper>
  );
};

export default CurrencyIcon;
