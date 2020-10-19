import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import NavBar from "./components/Header/NavBar";
import Sobre from "./views/Sobre";
import Info from "./views/Info";
import Portifolio from "./views/Portifolio";
import Qualificacoes from "./views/Qualificacoes";
import Contato from "./views/Contato";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar toggleTheme={toggleTheme} />
        <Sobre id="sobre" />
        <Info id="sobre" />
        <Portifolio />
        <Qualificacoes id="qualificacoes" />
        <Contato id="contato" />
      </ThemeProvider>
    </>
  );
}

export default App;
