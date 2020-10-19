import React, { useState } from "react";

import * as styled from "./style";

import PortifolioDiv from "../../components/PortifolioDiv";

import Ggcss from "../../assets/porti-imgs/ggcss.png";
import Sheila from "../../assets/porti-imgs/sheila.png";
import Simplez from "../../assets/porti-imgs/simplez.png";
import Vitoria from "../../assets/porti-imgs/vitoria.png";
import Propharmacos from "../../assets/porti-imgs/propharmacos.png";

function Portifolio() {
  const Initial_Portifolio = [
    {
      portifolioID: 1,
      portifolioImg: Ggcss,
      portifolioNome: "Gerador de CSS - GGCSS",
      portifolioDescricao: "App desenvolvido em ReactJs.",
      portifolioLink: "https://leeandro319.github.io/ggcss/#/",
    },
    {
      portifolioID: 2,
      portifolioImg: Vitoria,
      portifolioNome: "Padaria Vitória Régia",
      portifolioDescricao: "Tema desenvolvido desenvolvido em WordPress.",
      portifolioLink: "http://padariavitoriaregia.com.br/",
    },
    {
      portifolioID: 3,
      portifolioImg: Propharmacos,
      portifolioNome: "Pró Pharmacos",
      portifolioDescricao: "Tema desenvolvido desenvolvido em WordPress.",
      portifolioLink: "http://propharmacos.com.br/ ",
    },
    {
      portifolioID: 4,
      portifolioImg: Sheila,
      portifolioNome: "Sheila Peruzetto - Master Coaching",
      portifolioDescricao: "Tema desenvolvido desenvolvido em WordPress.",
      portifolioLink: "http://sheilaperuzetto.com.br/",
    },
    {
      portifolioID: 5,
      portifolioImg: Simplez,
      portifolioNome: "Viva Simplez!",
      portifolioDescricao: "Tema desenvolvido desenvolvido em WordPress.",
      portifolioLink: "http://vivasimplez.com.br/ ",
    },
  ];

  const [infosPorti] = useState(Initial_Portifolio);

  return (
    <>
      <styled.PortContainer id="portifolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                &#60; <i className="far fa-folder-open"></i> Portifólio/&gt;
              </h1>
              <p>Veja alguns dos meus projetos mais recentes.</p>
              <div className="AllCards">
                <PortifolioDiv infosPorti={infosPorti} />
              </div>
            </div>
          </div>
        </div>
      </styled.PortContainer>
    </>
  );
}

export default Portifolio;
