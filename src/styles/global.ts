import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    //
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 100vh;

    background: linear-gradient(#4568DC, #B06AB3);
  }
`
