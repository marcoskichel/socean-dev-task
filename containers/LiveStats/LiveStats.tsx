import { styled } from '@mui/material';
import StatsItem from '../../components/StatsItem/StatsItem';
import { useLiveStats } from '../../providers/LiveStats/LiveStatsProvider';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  gap: '1rem',
  [theme.breakpoints.up('md')]: {
    gap: 0,
  },
}));

const LiveStats = () => {
  const { stats } = useLiveStats();
  return (
    <Root>
      {stats.map((item) => (
        <StatsItem
          key={item.title}
          title={item.title}
          value={item.value}
          hint={item.hint}
          progress={item.progress}
        />
      ))}
    </Root>
  );
};

export default LiveStats;
