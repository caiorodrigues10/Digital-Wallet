import { Box } from '@mui/material';
import styled from 'styled-components';

export const ContainerNavBar = styled(Box)`
  display: flex;
  padding: 2rem 2rem 0rem 4rem;
  align-items: center;
  height: 20px;
  justify-content: space-between;
`;

export const ContainerInputSearch = styled(Box)`
  display: flex;
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(2px);
  background-color: transparent;
  width: calc(100% - 170px);
  height: 80px;
  align-items: center;
  padding-left: 4.4rem;
  gap: 1rem;
  -webkit-box-shadow: -1px 14px 13px -10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px 14px 13px -10px rgba(0, 0, 0, 0.1);
  box-shadow: -1px 14px 13px -10px rgba(0, 0, 0, 0.1);
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
