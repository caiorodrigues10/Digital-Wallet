import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
   }

   .recharts-tooltip-label {
     color: #000;
   }

   .recharts-tooltip-item-list {
     color: #000;
   }

   .recharts-default-tooltip {
     border-radius: 12px;
   }
`;
