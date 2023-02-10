import { Box } from '@mui/material';
import styled from 'styled-components';
import { colorSystem } from '../../styles/colors';

export const ContainerSingUp = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContentForm = styled.form`
  display: flex;
  padding: 2rem 2rem;
  width: 60%;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0% 30%;

    > h2 {
      text-align: center;
    }
  }
`;

export const Info = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: ${colorSystem.primarySystem};
`;
