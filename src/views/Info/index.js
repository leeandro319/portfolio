import React from "react";
import * as styled from "./style";
import Foto from "../../assets/foto.png";

function Info() {
  return (
    <styled.InfoContainer id="sobre">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 InfoSobre">
            <h1>
              &#60; <i className="fas fa-user"></i> Sobre/&gt;
            </h1>
            <p>
              Meu nome é Leandro, formado a um ano em Análises e desenvolvimento
              de sistemas. Trabalhei 3 anos em uma empresa de publicidade, 2
              anos como estagiário, e 1 auxiliar de Web Design.
            </p>
            <p>
              Procuro uma vaga no mercado de desenvolvedor Front End. em busca
              de conhecimento e experiência profissional.
            </p>
            <p>
              Sou uma pessoa que se adequa ao ambiente de trabalho facilmente, e
              quando houver dificuldades busco entende-las e resolve-las.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
            <div>
              <img className="img-fluid" src={Foto} alt="MinhaFoto" />
            </div>
          </div>
        </div>
      </div>
    </styled.InfoContainer>
  );
}

export default Info;
