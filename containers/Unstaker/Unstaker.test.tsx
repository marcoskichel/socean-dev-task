import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '../../styles/theme';
import Unstaker from './Unstaker';

describe('Unstaker', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Unstaker />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('update the unstake options', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Unstaker />
      </ThemeProvider>,
    );
    const input = screen.getByDisplayValue('0');
    userEvent.type(input, '1');

    const opt1 = await screen.findByText('0.997 SOL');
    const opt2 = await screen.findByText('1 SOL');
    expect(opt1).toBeInTheDocument();
    expect(opt2).toBeInTheDocument();
  });
});
