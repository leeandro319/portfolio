import React, { useState } from "react";
import Slider from "react-slick";

import * as styled from "./style";

import SliderDiv from "../../components/SliderDiv";

import iconsQualidadesBoots from "../../assets/icons/iconsQualidadesBoots.png";
import iconsQualidadesWp from "../../assets/icons/iconsQualidadesWp.png";
import iconsQualidadesRedux from "../../assets/icons/iconsQualidadesRedux.png";
import iconsQualidadesReact from "../../assets/icons/iconsQualidadesReact.png";
import iconsQualidadesJs from "../../assets/icons/iconsQualidadesJs.png";
import iconsQualidadesCss from "../../assets/icons/iconsQualidadesCss.png";
import iconsQualidadesHtml from "../../assets/icons/iconsQualidadesHtml.png";
import iconsQualidadesPs from "../../assets/icons/iconsQualidadesPs.png";
import iconDevPhp from "../../assets/icons/iconDevPhp.png";

function Qualificacoes() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [quali] = useState([
    {
      imgQuali: iconsQualidadesHtml,
      nomeQuali: "HTML5",
      pontuacao: "5",
    },
    {
      imgQuali: iconsQualidadesCss,
      nomeQuali: "CSS3",
      pontuacao: "4",
    },
    {
      imgQuali: iconsQualidadesJs,
      nomeQuali: "JavaScript",
      pontuacao: "4",
    },
    {
      imgQuali: iconsQualidadesReact,
      nomeQuali: "ReactJs",
      pontuacao: "4",
    },
    {
      imgQuali: iconsQualidadesReact,
      nomeQuali: "React Native",
      pontuacao: "3",
    },
    {
      imgQuali: iconsQualidadesRedux,
      nomeQuali: "Redux",
      pontuacao: "3",
    },
    {
      imgQuali: iconDevPhp,
      nomeQuali: "PHP",
      pontuacao: "4",
    },
    {
      imgQuali: iconsQualidadesWp,
      nomeQuali: "Wordpress",
      pontuacao: "5",
    },
    {
      imgQuali: iconsQualidadesBoots,
      nomeQuali: "Bootstrap",
      pontuacao: "5",
    },
    {
      imgQuali: iconsQualidadesPs,
      nomeQuali: "PhotoShop",
      pontuacao: "4",
    },
  ]);

  return (
    <styled.Qualificacoes id="qualificacoes">
      <div className="container ">
        <div className="row qualificacao-container">
          <div className="col-md-12">
            <div className="titulo-home mx-auto">
              <h1>
                &#60; <i className="fas fa-star"></i> Qualificações/&gt;
              </h1>

              <div className="slider-div text-center">
                <Slider {...settings}>
                  {quali.map((item, i) => (
                    <SliderDiv
                      key={i}
                      imgQuali={item.imgQuali}
                      nomeQuali={item.nomeQuali}
                      pontuacao={item.pontuacao}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </styled.Qualificacoes>
  );
}

export default Qualificacoes;
