import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap');
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Nunito', sans-serif;
    }

    a, button {
        font-family: 'Nunito', sans-serif;
    }
`;

export default GlobalStyle;
