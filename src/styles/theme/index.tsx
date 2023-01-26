import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#5CAB7E',
      main: '#417B5A',
      dark: '#2B7049',
      contrastText: '#FBFBF2',
    },
    secondary: {
      main: '#ABE9D2',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Poppins',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#5CAB7E',
      main: '#417B5A',
      dark: '#2B7049',
      contrastText: '#FBFBF2',
    },
    secondary: {
      main: '#ABE9D2',
    },
  },
});

export { themeLight, themeDark };
