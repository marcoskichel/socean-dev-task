import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import theme from '../styles/theme';
import Home from './index.page';

jest.mock('../providers/LiveStats/LiveStatsProvider', () => ({
  _esModule: true,
  default: ({ children }: { children: ReactNode }) => <>children</>,
  useLiveStats: jest.fn().mockReturnValue({
    stats: [
      {
        title: 'Total Value Locked',
        value: '$61.70M USD',
        hint: 'SOL/USD: $87.9800',
      },
      {
        title: 'SOL/scnSOL in Pool',
        value: '701.31K SOL',
        hint: '684,440 scnSOL',
      },
      {
        title: '7D APY',
        value: '6.08%',
        hint: '12H APY: 7.14%',
      },
      {
        title: 'SOL/scnSOL Price',
        value: '1.0247 SOL',
        hint: '= 1 scnSOL',
      },
      {
        title: 'EPOCH 272',
        value: '19%',
        hint: 'ETA: 2d 5h 16m 10s',
        progress: 19,
      },
    ],
  }),
}));

describe('Home', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
