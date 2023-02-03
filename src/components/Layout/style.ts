import { Box } from '@mui/material';
import styled from 'styled-components';

interface MainContainerProps {
  asideOpen: boolean;
  widthContent: string;
}

export const MainContainer = styled(Box)<MainContainerProps>`
  display: grid;
  grid-template-columns: ${(p) =>
    !p.asideOpen ? '100px calc(100% - 100px)' : '300px calc(100% - 300px)'};
  transition: 0.5s;
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Content = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding: 1rem;
`;
