import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '../../styles/theme';
import Staker from './Staker';

describe('Staker', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Staker />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('update the outcome scnSOL value', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Staker />
      </ThemeProvider>,
    );
    const input = screen.getByDisplayValue('0');
    userEvent.type(input, '1');

    const el = await screen.findByText('0.976 scnSOL');
    expect(el).toBeInTheDocument();
  });
});
