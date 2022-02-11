import { createTheme, Theme } from '@mui/material';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#A7A7A7',
    },
    action: {
      disabled: '#5C5C5C',
    },
  },
});

export default theme;