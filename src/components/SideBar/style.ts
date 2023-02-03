import { Box } from '@mui/material';
import styled from 'styled-components';
import { colorSystem } from '../../styles/colors';

interface ContainerSideBarProps {
  asideOpen: boolean;
}

export const ContainerSideBar = styled(Box)<ContainerSideBarProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 2px dashed #c6c6c6;
  height: 100vh;
  width: ${(p) => (p.asideOpen ? '300px' : '100px')};
  align-items: center;
  transition: 0.5s;
`;

export const ArrowSide = styled(Box)`
  width: 25px;
  height: 25px;
  position: absolute;
  margin-left: ${(p) => (p.asideOpen ? '300px' : '100px')};
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 56px;
  background-color: ${colorSystem.backgroundSystem};
  border-radius: 100%;
  border: 2px dashed #c6c6c6;
  color: #777;
  cursor: pointer;
  transition: 0.5s;

  > button {
    transform: ${(p) => (p.asideOpen ? 'rotate(180deg)' : '')};
  }
`;
