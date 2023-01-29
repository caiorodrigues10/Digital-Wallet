import { Box } from '@mui/material';
import styled from 'styled-components';
import { colorSystem } from '../../styles/colors';

export const ContainerSideBar = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 2px dashed #c6c6c6;
  height: 100vh;
  width: 100px;
  align-items: center;
`;

export const ArrowSide = styled(Box)`
  width: 25px;
  height: 25px;
  position: absolute;
  margin-left: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 56px;
  background-color: ${colorSystem.backgroundSystem};
  border-radius: 100%;
  border: 2px dashed #c6c6c6;
  color: #777;
  cursor: pointer;
`