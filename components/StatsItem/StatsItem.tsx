import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
}

const StatsItem = (props: Props) => {
  const { title } = props;
  return (
    <Box sx={{ backgroundColor: 'bg' }}>
      <Typography variant="h3" gutterBottom component="div">
        {title}
      </Typography>
    </Box>
  );
};

export default StatsItem;
