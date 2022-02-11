import { styled, Typography } from '@mui/material';
import { CustomPallete } from '../../styles/theme';

const Container = styled('div')(({ theme }) => ({
  padding: '2rem',
  border: '1px solid #A7A7A7',
  backgroundColor: (theme as unknown as CustomPallete).bg,
  borderRadius: '1.5rem',
  gap: '1rem',
  [theme.breakpoints.up('md')]: {
    borderRadius: 0,
    gap: 0,
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

interface Props {
  title: string;
  value: string;
  hint: string;
}

const titleSx = {
  marginBottom: '4.75rem',
  color: 'secondary.main',
};

const StatsItem = (props: Props) => {
  const { title, value, hint } = props;
  return (
    <Container>
      <Typography variant="h6" sx={titleSx}>
        {title}
      </Typography>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="overline">{hint}</Typography>
    </Container>
  );
};

export default StatsItem;
