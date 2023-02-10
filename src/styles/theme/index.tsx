import { PaletteMode } from '@mui/material';

const themeColors = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            light: '#5CAB7E',
            main: '#417B5A',
            dark: '#2B7049',
            contrastText: '#FBFBF2',
          },
          secondary: {
            main: '#ABE9D2',
          },
        }
      : {
          primary: {
            light: '#5CAB7E',
            main: '#417B5A',
            dark: '#2B7049',
            contrastText: '#FBFBF2',
          },
          secondary: {
            main: '#ABE9D2',
          },
        }),
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

export { themeColors };
