import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;

}

html{
  /* a cada 1 rem será considerado 10px*/
  font-size: 62.5%;
  
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;

  }

a:link {
  text-decoration: none;
}

button{
  cursor: pointer;
}

@media (max-width: 400px) {
  html{
    font-size: 50%;
    }
  }
`;
