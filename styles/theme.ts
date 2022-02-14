import { createTheme, PaletteOptions, Theme } from '@mui/material';

export type CustomPallete = PaletteOptions & { bg: string };

const theme: Theme = createTheme({
  typography: {
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      marginTop: '6rem',
      marginBottom: '1rem',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letter: '-1%',
    },
    body1: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        sx: {
          borderRadius: '1.5rem',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    background: {
      paper: '#232323',
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#F24F83',
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
