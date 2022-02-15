import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Currency } from '../../types/Currency';
import StakeInput from './StakeInput';

describe('StakeInput', () => {
  it('renders', () => {
    const { asFragment } = render(
      <StakeInput currency={Currency.scnSOL} value="10" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('trigger onChange callback', () => {
    const onChange = jest.fn();
    render(<StakeInput currency={Currency.scnSOL} onChange={onChange} />);
    const input = screen.getByDisplayValue('0');
    userEvent.type(input, '1');

    expect(onChange).toHaveBeenLastCalledWith('1');
  });
});
