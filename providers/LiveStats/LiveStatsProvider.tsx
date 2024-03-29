import { createContext, useContext, useMemo } from 'react';
import { LiveStats } from '../../types/LiveStats';

interface LiveStatsContextProps {
  stats: LiveStats[];
}

export const LiveStatsContext = createContext<LiveStatsContextProps>({
  stats: [],
});

interface LiveStatsProviderProps {
  children: React.ReactNode;
}

/**
 * Provide live stats data to the rest of the app.
 *
 * Even though this is just a POC, I decided to use a context for this info as it would likely come from an API
 */
const LiveStatsProvider = (props: LiveStatsProviderProps) => {
  const { children } = props;

  const value = useMemo<LiveStatsContextProps>(
    () => ({
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
    [],
  );

  return (
    <LiveStatsContext.Provider value={value}>
      {children}
    </LiveStatsContext.Provider>
  );
};

export const useLiveStats = () => useContext(LiveStatsContext);

export default LiveStatsProvider;
