import { createContext, useContext, useMemo } from 'react';

interface LiveStats {
  title: string;
  value: string;
  hint: string;
}

interface LiveStatsContextProps {
  stats: LiveStats[];
}

export const LiveStatsContext = createContext<LiveStatsContextProps>({
  stats: [],
});

interface LiveStatsProviderProps {
  children: React.ReactNode;
}

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
