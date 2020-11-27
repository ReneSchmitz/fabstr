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
        font-size: 1.4em;
    }

    :root {
    }
    
    body {

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
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
        }
    h4 {
        color: #808080;

        }
    
    button,
    input {
        font-family: 'Roboto', sans-serif;
        }
    `;

export default GlobalStyle;
