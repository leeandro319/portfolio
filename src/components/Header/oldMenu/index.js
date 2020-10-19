import React, { useState } from "react";

import SwitchToggle from "./SwithToggle";
import GlobalStyle from "../../styles/global";

import * as styled from "./header";
import LogoImg from "../../assets/logo.png";

function Header(props) {
  const InitialStateLinksNav = [
    {
      NavTitulo: "Sobre",
      PatchLink: "",
    },
    {
      NavTitulo: "Portifólio",
      PatchLink: "",
    },
    {
      NavTitulo: "Qualificações",
      PatchLink: "",
    },
    {
      NavTitulo: "Contato",
      PatchLink: "",
    },
  ];

  const [linksNav] = useState(InitialStateLinksNav);
  const [status, setStatus] = useState("close");

  function handleMenu() {
    setStatus(status === "open" ? "close" : "open");
  }

  return (
    <>
      <GlobalStyle overflowChange={status === "open" ? "hidden" : ""} />
      <styled.NavContainer>
        <div className="header">
          <div className="logoNav">
            <img src={LogoImg} alt="LogoImg" />
          </div>
          <div
            className={status === "open" ? " menu-section on" : "menu-section"}
          >
            <div className="burguermenu" role="button" onClick={handleMenu}>
              <i className={status}></i>
              <i className={status}></i>
              <i className={status}></i>
            </div>
            <nav>
              <ul>
                {linksNav.map((item, i) => {
                  return <li key={i}>{item.NavTitulo}</li>;
                })}
              </ul>
            </nav>
            <SwitchToggle ttheme={props.toggleTheme} />
          </div>
        </div>
      </styled.NavContainer>
    </>
  );
}

export default Header;
