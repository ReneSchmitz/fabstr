import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }
    ::placeholder {
        color: #202020;
        font-size: 1.3em;
    }

    :root {
        font-size: 16px;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #202020;
        margin: 0;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        user-select: none;
        }
    
    h1 {
            font-family: 'Bodoni 72', serif;
            font-weight: 900;
            font-size: 3.5em !important;
            margin: 0;
            text-align: center;
        }
    
    h2 {
        letter-spacing: -0.02em;
    }
    h2,    
    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.3em;
        color: #808080;

        }
    
    button,
    input {
        font-family: 'Roboto', sans-serif;
        }
    `;

export default GlobalStyle;
