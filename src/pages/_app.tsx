import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useProgressStore } from '../store';
import { Progress } from '../components/ProgressPage/Progress';
import { GlobalStyle } from '../styles/global';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppProvider from '../context/AppContext';
import { PaletteMode } from '@mui/material';
import { themeColors } from '../styles/theme';

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const { events } = useRouter();

  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(themeColors('light')), [mode]);

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleStop);
    events.on('routeChangeError', handleStop);
    return () => {
      events.on('routeChangeStart', handleStart);
      events.on('routeChangeComplete', handleStop);
      events.on('routeChangeError', handleStop);
    };
  }, [events, setIsAnimating]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Progress isAnimating={isAnimating} />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default MyApp;
