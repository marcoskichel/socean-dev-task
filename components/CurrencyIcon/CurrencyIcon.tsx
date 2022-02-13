import { styled, SxProps, Theme } from '@mui/material';
import Image from 'next/image';

const Wrapper = styled('div')(() => ({
  paddingBottom: '0.9rem',
  paddingRight: '0.9rem',
}));

export enum Currency {
  SOL = 'SOL',
  scnSOL = 'scnSOL',
}

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
      <Image src={src} alt="Currency" width={width} height={height} />
    </Wrapper>
  );
};

export default CurrencyIcon;
