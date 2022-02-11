import StatsItem from '../../components/StatsItem/StatsItem';

const data = [{ title: 'Total Value Locked' }, { title: 'SOL/scnSOL in Pool' }];

const LiveStats = () => {
  return (
    <div>
      {data.map((item) => (
        <StatsItem key={item.title} title={item.title} />
      ))}
    </div>
  );
};

export default LiveStats;
