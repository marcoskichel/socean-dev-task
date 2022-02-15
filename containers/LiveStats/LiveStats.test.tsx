import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { useLiveStats } from '../../providers/LiveStats/LiveStatsProvider';
import theme from '../../styles/theme';
import LiveStats from './LiveStats';

jest.mock('../../providers/LiveStats/LiveStatsProvider');

const mockUseLiveStats = useLiveStats as jest.Mock;

mockUseLiveStats.mockReturnValue({
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
});

describe('LiveStats', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <LiveStats />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
