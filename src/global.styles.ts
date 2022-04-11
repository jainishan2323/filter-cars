import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #4a4a4a;
    font-size: 14px;
  }
  html {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5 {
    margin: 8px 0;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
  h4, p {
    font-size: 14px;
    font-weight: 400;
  }
  label {
    font-size: 12px;
    font-weight: 400;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export const theme = {
  spacing: {
    small: '8px',
    medium: '12px',
    large: '24px'
  },
  colors: {
    primary: '#ea7f28',
    secondary: '#d37324',
    text: '#4a4a4a',
    background: '#ededed', 
  },
  fontSize: {
    '14px': '14px',
    '12px': '12px',
    '18px': '18px',
    '32px': '32px',
  }
};
