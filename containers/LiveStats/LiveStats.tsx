import { styled } from '@mui/material';
import StatsItem from '../../components/StatsItem/StatsItem';

const data = [
  {
    title: 'Total Value Locked',
    value: '$61.70M USD',
    hint: 'SOL/USD: $87.9800',
  },
  { title: 'SOL/scnSOL in Pool', value: '701.31K SOL', hint: '684,440 scnSOL' },
];

const Container = styled('div')(() => ({
  display: 'flex',
}));

const LiveStats = () => {
  return (
    <Container>
      {data.map((item) => (
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
