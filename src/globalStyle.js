import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font: 14px 'calibri', sans-serif;
        background-color: #EFEFEF;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer; 
    }

`;
