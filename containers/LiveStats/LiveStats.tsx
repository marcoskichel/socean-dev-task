import { styled } from '@mui/material';
import StatsItem from '../../components/StatsItem/StatsItem';
import { useLiveStats } from '../../providers/LiveStatsProvider';

const Container = styled('div')(() => ({
  display: 'flex',
}));

const LiveStats = () => {
  const { stats } = useLiveStats();
  return (
    <Container>
      {stats.map((item) => (
        <StatsItem
          key={item.title}
          title={item.title}
          value={item.value}
          hint={item.hint}
        />
      ))}
    </Container>
  );
};

export default LiveStats;
