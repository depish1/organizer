import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
    html {
        box-sizing: border-box;
        height:100%;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto Condensed', sans-serif;
        height:100%;
    }

    a, button {
        font-family: 'Roboto Condensed', sans-serif;
    }
`;

export default GlobalStyle;
