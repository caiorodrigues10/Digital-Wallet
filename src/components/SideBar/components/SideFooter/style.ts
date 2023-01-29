import { Button } from "@mui/material";
import styled from "styled-components";

interface ButtonFooterProps {
  active: boolean;

}

export const ButtonFooter = styled(Button)<ButtonFooterProps>`
  background: ${p => p.active ? '#FFDFDF' : ''};
  color: ${p => p.active ? '#FF4242' : '#515151'};
  display: flex;
  flex-direction: column;
  text-transform: none;
  font-size: 10px;
  border-radius: 12px;
  width: 80%;
  margin-top: 100%;

  &:hover {
    background: ${p => p.active ? '#FFDFDF' : 'rgba(142, 142, 142, 0.16)'};
  }
`