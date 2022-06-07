import { createGlobalStyle } from "styled-components";

// with this you can create global style css for your entire react app
// and you can make media query to you react app here

//first you have to write App.css code here and import it in your App.ja file at top
export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans";
  padding: 20px 60px;
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}

`;

