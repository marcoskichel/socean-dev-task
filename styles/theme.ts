import { createTheme, PaletteOptions, Theme } from '@mui/material';

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
    mode: 'dark',
    primary: {
      main: '#F24F83',
      light: 'blue',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A7A7A7',
    },
    action: {
      disabled: '#5C5C5C',
    },
  },
});

export default theme;
