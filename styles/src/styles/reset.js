import { createGlobalStyle } from "styled-components";

/* aplica CSS de forma literal */
export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

    :root{
        --font-primary: 'Inter', sans-serif;
        --color-red: red;
    }
`;
