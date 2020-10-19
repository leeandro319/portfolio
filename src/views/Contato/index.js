import React from "react";

import * as styled from "./style";

import FormControl from "../../components/FormContato";

import LogoLinkedin from "../../assets/icons/linkedinLogo.png";
import LogoGit from "../../assets/icons/gitLogo.png";
import LogoWhats from "../../assets/icons/whatsLogo.png";

function Contato() {
  return (
    <styled.Contatos id="contato">
      <div className="contato-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titulo-home mx-auto text-white">
                <h1>
                  &#60; <i className="far fa-id-card"></i> Contato/&gt;
                </h1>
              </div>
            </div>
            <p className="text-white mt-5 pl-3">
              Entre em contato enviando uma mensagem por aqui mesmo, ou pelas
              redes sociais.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <FormControl />
            </div>
            <div className="col-sm-12 col-md-6 links-contato">
              <a
                href="https://www.linkedin.com/in/leandro-guaraldi-bb011815b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="itens-contato">
                  <img src={LogoLinkedin} alt="Linkedin" /> <p>/Linkedin</p>
                </div>
              </a>
              <a
                href="https://github.com/leeandro319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="itens-contato">
                  <img src={LogoGit} alt="GitHub" /> <p>/GitHub</p>
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511946557082"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="itens-contato">
                  <img src={LogoWhats} alt="Whatsapp" /> <p>/Whatsapp</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </styled.Contatos>
  );
}

export default Contato;
