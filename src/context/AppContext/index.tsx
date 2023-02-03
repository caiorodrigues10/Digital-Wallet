import { useRouter } from 'next/router';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface AppContextData {
  asideIsOpen: boolean;
  handleAsideOpen: () => void;
  handleAsideClose: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextData);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [asideIsOpen, setAsideIsOpen] = useState(false);
  const { pathname } = useRouter();

  const handleAsideOpen = useCallback(() => {
    setAsideIsOpen(true);
  }, []);

  const handleAsideClose = useCallback(() => {
    setAsideIsOpen(false);
  }, []);

  useEffect(() => {
    handleAsideClose();
  }, [pathname]);

  return (
    <AppContext.Provider
      value={{
        asideIsOpen,
        handleAsideOpen,
        handleAsideClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'countdownContext must be used within an CountdownProvider'
    );
  }

  return context;
};

export default AppProvider;
