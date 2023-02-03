import { Button } from '@mui/material';
import styled from 'styled-components';

interface ButtonFooterProps {
  active: boolean;
  asideOpen: boolean;
}

export const ButtonFooter = styled(Button)<ButtonFooterProps>`
  background: ${(p) => (p.active ? '#FFDFDF' : '')};
  color: ${(p) => (p.active ? '#FF4242' : '#515151')};
  display: flex;
  flex-direction: ${(p) => (p.asideOpen ? 'row' : 'column')};
  text-transform: none;
  font-size: ${(p) => (p.asideOpen ? '12px' : '10px')};
  border-radius: 12px;
  justify-content: ${(p) => (p.asideOpen ? 'flex-start' : '')};
  gap: ${(p) => (p.asideOpen ? '1rem' : '')};
  align-items: ${(p) => (p.asideOpen ? 'center' : '')};
  width: 80%;

  &:hover {
    background: ${(p) => (p.active ? '#FFDFDF' : 'rgba(142, 142, 142, 0.16)')};
  }
`;
