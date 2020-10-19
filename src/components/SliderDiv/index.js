import React from "react";

import "./slider.css";

function SliderDiv(props) {
  return (
    <div className="slider-control">
      <img className="mx-auto py-3" src={props.imgQuali} alt="" />
      <span className="quali-styles-title">{props.nomeQuali}</span>
      <br />
      <span className="quali-styles">
        {props.pontuacao}/5 <i className="fas fa-star"></i>
      </span>
    </div>
  );
}

export default SliderDiv;
