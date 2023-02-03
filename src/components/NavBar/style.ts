import { Box, Paper } from '@mui/material';
import styled from 'styled-components';

interface ContainerNavBarProps {
  asideOpen: boolean;
}

export const ContainerNavBar = styled(Box)<ContainerNavBarProps>`
  display: flex;
  padding: 2rem 2rem 0rem 4rem;
  align-items: center;
  height: 20px;
  justify-content: space-between;
`;

export const ContainerInputSearch = styled(Box)`
  display: flex;
  position: absolute;
  z-index: 5;
  backdrop-filter: blur(2px);
  background-color: transparent;
  width: calc(100% - 200px);
  height: 80px;
  align-items: center;
  padding-left: 2.5rem;
  gap: 1rem;
  margin-left: 1.4rem;
`;

export const GroupHeader = styled(Box)`
  position: sticky;
  padding: 0.5rem 10px;
  background-color: #ceeedd;
  color: #00aa56;
  margin-top: -8px;
  border-bottom: 1px solid #00aa56;
`;

export const GroupItems = styled.ul`
  background-color: #fff;
  color: #00aa56;
  padding: 0.75rem 0;
  margin-top: -4px;

  > li:hover {
    outline: 2px dashed #00aa56;
    transition: 1s;
  }
`;
