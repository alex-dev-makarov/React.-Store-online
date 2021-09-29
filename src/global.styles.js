import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 50px;
        font-family: 'Open Sans Condensed';

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
}
`