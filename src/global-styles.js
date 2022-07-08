import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body { 
        background-color: #1B2430;
        font-family: Arial, Helvetica, sans-serif;
    }

    #root{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export default GlobalStyles;