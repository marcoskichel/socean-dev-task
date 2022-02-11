import { Box } from '@mui/material';
import StatsItem from '../../components/StatsItem/StatsItem';

const data = [{ title: 'Total Value Locked' }, { title: 'SOL/scnSOL in Pool' }];

const LiveStats = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {data.map((item) => (
        <StatsItem key={item.title} title={item.title} />
      ))}
    </Box>
  );
};

export default LiveStats;
