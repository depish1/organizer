import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }

    a, button {
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyle;
