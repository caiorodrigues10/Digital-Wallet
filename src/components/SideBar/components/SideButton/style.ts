import { Button } from '@mui/material';
import styled from 'styled-components';

interface ButtonSideProps {
  active: boolean;
  asideOpen: boolean;
}

export const ButtonSide = styled(Button)<ButtonSideProps>`
  background: ${(p) => (p.active ? '#EBF8F2' : '')};
  color: ${(p) => (p.active ? '' : '#515151')};
  flex-direction: ${(p) => (p.asideOpen ? 'row' : 'column')};
  font-size: ${(p) => (p.asideOpen ? '12px' : '10px')};
  justify-content: ${(p) => (p.asideOpen ? 'flex-start' : '')};
  gap: ${(p) => (p.asideOpen ? '1rem' : '')};
  align-items: ${(p) => (p.asideOpen ? 'center' : '')};
  transition: flex-direction 3s;
  text-transform: none;
  border-radius: 12px;
  display: flex;
  width: 80%;

  &:hover {
    transition: 0.4s;
    background: ${(p) => (p.active ? '#EBF8F2' : 'rgba(142, 142, 142, 0.16)')};
  }
`;
