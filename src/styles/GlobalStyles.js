import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'poppins'
}

:root{
   //principal-colors
--primary-color: #1e90ff;
//dark-colors
--dark-color: #1e1e1e;
//light-colors
--light-color: #f1f1f1;
}

html{
    scroll-behavior: smooth;
}

body{
    background-color: var(--ligth-color);
    color: #ffffff;
    margin: 0;
    padding: 0;
}
`;
