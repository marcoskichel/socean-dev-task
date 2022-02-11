import StatsPaper from '../../components/StatsPaper/StatsPaper';

const data = [{ title: 'Total Value Locked' }, { title: 'SOL/scnSOL in Pool' }];

const LiveStats = () => {
  return (
    <div>
      {data.map((item) => (
        <StatsPaper key={item.title} title={item.title} />
      ))}
    </div>
  );
};

export default LiveStats;
