import { createTheme, Theme, ThemeOptions } from '@mui/material';

const theme: Theme = createTheme({
  palette: {
    bg: `#000000`,
    mode: 'dark',
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
} as unknown as ThemeOptions);

export default theme;
