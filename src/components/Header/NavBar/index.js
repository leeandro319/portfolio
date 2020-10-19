import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import * as styled from "./style";
import LogoImg from "../../../assets/logo.png";

import SwitchToggle from "../SwithToggle";

function NavBar(props) {
  const InitialStateLinksNav = [
    {
      key: 1,
      NavTitulo: "Sobre",
      PatchLink: "sobre",
    },
    {
      key: 2,
      NavTitulo: "Portifólio",
      PatchLink: "portifolio",
    },
    {
      key: 3,
      NavTitulo: "Qualificações",
      PatchLink: "qualificacoes",
    },
    {
      key: 4,
      NavTitulo: "Contato",
      PatchLink: "contato",
    },
  ];

  const [linksNav] = useState(InitialStateLinksNav);
  const [status, setStatus] = useState("close");

  function handleMenu() {
    setStatus(status === "open" ? "close" : "open");
  }

  return (
    <styled.NavContainer>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div className="navbar-brand" onClick={() => scroll.scrollToTop()}>
            <img src={LogoImg} alt="LogoImg" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="burguermenu" role="button" onClick={handleMenu}>
              <i className={status}></i>
              <i className={status}></i>
              <i className={status}></i>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
              {linksNav.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      activeClass="active"
                      className="nav-link"
                      to={item.PatchLink}
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {item.NavTitulo}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-item">
                <SwitchToggle ttheme={props.toggleTheme} className="nav-link" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </styled.NavContainer>
  );
}

export default NavBar;
