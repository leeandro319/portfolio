import React, { useState } from "react";

import * as styled from "./style";

function PortifolioDiv(props) {
  const [infosP] = useState(props.infosPorti);

  return (
    <>
      <styled.Card>
        <div className="container">
          {infosP.map((item, i) => (
            <div className="row p-5  rowCard" key={i}>
              <div className="col-sm-12  col-md-6 text-center">
                <img
                  className="img-fluid"
                  src={item.portifolioImg}
                  alt={item.portifolioNome}
                />
              </div>
              <div className="col-sm-12 col-md-6 cardStyle">
                <h2>{item.portifolioNome}</h2>
                <p>{item.portifolioDescricao}</p>
                <div className="navegationPortifolio">
                  <a href={item.portifolioLink}>
                    <button className="btn">Visitar Site</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </styled.Card>
    </>
  );
}

export default PortifolioDiv;
