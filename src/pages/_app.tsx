import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useProgressStore } from '../store';
import { Progress } from '../components/ProgressPage/Progress';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight } from '../styles/theme';
import AppProvider from '../context/AppContext';

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const { events } = useRouter();

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
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Progress isAnimating={isAnimating} />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default MyApp;
