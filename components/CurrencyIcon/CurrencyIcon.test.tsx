import { render } from '@testing-library/react';
import { Currency } from '../../types/Currency';
import CurrencyIcon from './CurrencyIcon';

describe('CurrencyIcon', () => {
  it('renders (SOL)', () => {
    const { asFragment } = render(<CurrencyIcon currency={Currency.SOL} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders (scnSOL)', () => {
    const { asFragment } = render(<CurrencyIcon currency={Currency.scnSOL} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
