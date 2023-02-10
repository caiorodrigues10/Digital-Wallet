import { createGlobalStyle } from 'styled-components';
import { colorSystem } from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
      background: ${colorSystem.backgroundSystem};
    .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill, .css-1h9uykw-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
     -webkit-box-shadow: 0 0 0 100px ${colorSystem.backgroundInputSystem} inset;
    }
    
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
