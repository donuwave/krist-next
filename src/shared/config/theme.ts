import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseOptions = {
  typography: {
    fontFamily: '"Jost", sans-serif',
  },
  shape: {
    borderRadius: 8,
    button: {
      textTransform: 'capitalize',
    },
  },
  spacing: 4,
};

let lightTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#131118',
      contrastText: '#FFFFFF',
      dark: '#423e4c',
    },
    secondary: {
      main: '#A4A1AA',
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

let darkTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b00dc',
      contrastText: '#e10c0c',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#040404',
      paper: '#ffffff',
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { darkTheme, lightTheme };
