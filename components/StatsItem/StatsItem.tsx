import { LinearProgress, styled, Typography } from '@mui/material';
import { LiveStats } from '../../providers/LiveStatsProvider';

const Root = styled('div')(({ theme }) => ({
  padding: '2rem',
  border: '1px solid #171717',
  borderRadius: '1.5rem',
  flexBasis: 0,
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    borderRadius: 0,
  },
  '&:first-child': {
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
  },
  '&:last-child': {
    borderTopRightRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
  },
}));

type Props = LiveStats;

const titleSx = {
  marginBottom: '4.75rem',
};

const ProgressPlaceholder = () => <div></div>;

const StatsItem = (props: Props) => {
  const { title, value, hint, progress } = props;
  return (
    <Root>
      <Typography color="text.secondary" variant="h6" sx={titleSx}>
        {title}
      </Typography>
      {progress ? (
        <LinearProgress variant="determinate" value={progress} />
      ) : (
        <ProgressPlaceholder />
      )}
      <Typography variant="h5">{value}</Typography>
      <Typography color="text.secondary" variant="overline">
        {hint}
      </Typography>
    </Root>
  );
};

export default StatsItem;
