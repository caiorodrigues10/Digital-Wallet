import { Box, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { colorSystem } from '../../styles/colors';

export const ContainerLogin = styled(Box)`
  display: flex;
  background: ${colorSystem.backgroundSystem};
  width: 100%;
  justify-content: space-between;
  height: 100vh;
`;

export const SideTrapeze = styled(Box)`
  background: ${colorSystem.primarySystem};
  width: 100%;
  height: 100%;
  position: absolute;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 39% 100%);
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin-bottom: 120px;
  z-index: 1;

  img {
    margin-bottom: 32px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 2;
  justify-content: space-between;
  padding: 0 10% 0 10%;
`;
