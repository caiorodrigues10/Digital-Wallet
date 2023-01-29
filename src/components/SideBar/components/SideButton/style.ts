import { Button } from "@mui/material";
import styled from "styled-components";

interface ButtonSideProps {
  active: boolean;

}


export const ButtonSide = styled(Button)<ButtonSideProps>`
  background: ${p => p.active ? '#EBF8F2' : ''};
  color: ${p => p.active ? '' : '#515151'};
  display: flex;
  flex-direction: column;
  text-transform: none;
  font-size: 10px;
  border-radius: 12px;
  width: 80%;

  &:hover {
    background: ${p => p.active ? '#EBF8F2' : 'rgba(142, 142, 142, 0.16)'};
  }
`