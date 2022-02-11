import {
  createTheme,
  PaletteOptions,
  Theme,
  ThemeOptions,
} from '@mui/material';

export type CustomPallete = PaletteOptions & { bg: string };

const theme: Theme = createTheme({
  typography: {
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '22px',
      letter: '-1%',
    },
  },
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
