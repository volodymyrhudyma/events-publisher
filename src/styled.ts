import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
  }
  input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
  ::-webkit-input-placeholder {
    color: rgb(214, 214, 214);
    font-size: 1.4rem;
  }
  :-moz-placeholder {
    color: rgb(214, 214, 214);
  }
  ::-moz-placeholder {
    color: rgb(214, 214, 214);
  }
  :-ms-input-placeholder {
    color: rgb(214, 214, 214);
  }
  ::-webkit-datetime-edit-text {
    color: rgb(214, 214, 214);
  }
  ::-webkit-datetime-edit-text, 
  ::-webkit-datetime-edit-day-field, 
  ::-webkit-datetime-edit-month-field, 
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field
  {
    color: rgb(214, 214, 214);
  }
`;
