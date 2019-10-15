import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      @import url('https://fonts.googleapis.com/cssfamily=Work+Sans:400,500&display=swa
}
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.darkblue};
    color: white;
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

export default GlobalStyles;