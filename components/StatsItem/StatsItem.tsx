import { LinearProgress, styled, Typography } from '@mui/material';
import { LiveStats } from '../../providers/LiveStatsProvider';

// Styles

const Root = styled('div')(({ theme }) => ({
  padding: '2rem',
  border: '1px solid #171717',
  borderRadius: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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

const ProgressRoot = styled('div')(() => ({
  height: '4.75rem',
  display: 'grid',
  alignItems: 'center',
}));

// Component

type Props = LiveStats;

/**
 * Renders the progress bar or a placeholder if the value is not available.
 */
const Progress = (props: { value?: number }) => {
  const { value } = props;

  return (
    <ProgressRoot>
      {value && <LinearProgress variant="determinate" value={value} />}
    </ProgressRoot>
  );
};

/**
 * A component that renders live stats information.
 */
const StatsItem = (props: Props) => {
  const { title, value, hint, progress } = props;

  return (
    <Root>
      <Typography color="text.secondary" variant="h6">
        {title}
      </Typography>
      <Progress value={progress} />
      <Typography variant="h5">{value}</Typography>
      <Typography color="text.secondary" variant="overline">
        {hint}
      </Typography>
    </Root>
  );
};

export default StatsItem;
