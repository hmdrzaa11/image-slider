import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }


    body{
        color: #dbcab0;
        background-color: #1f232c;
    }

`;
