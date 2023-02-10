import { Box } from '@mui/material';
import styled from 'styled-components';
import { colorSystem } from '../colors';

export const Container404 = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 72px;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.42);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2.5rem;
    gap: 1rem;
  }
`;

export const PolygonOne = styled(Box)`
  clip-path: polygon(50% 0%, 0 0, 0 49%);
  width: 100%;
  height: 100%;
  background: ${colorSystem.primarySystem};
  position: absolute;
  z-index: 2;
`;

export const PolygonTwo = styled(Box)`
  clip-path: polygon(100% 48%, 0 0, 100% 0);
  width: 100%;
  height: 100%;
  background: #64ce5b;
  position: absolute;
`;
