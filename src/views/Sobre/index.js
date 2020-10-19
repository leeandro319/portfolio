import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import * as styled from "./styled";

function Sobre() {
  return (
    <styled.ContainerSobre>
      <div className="container">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", restSpeed: 0.5 }}
          className="apresentacaoNome"
        >
          <span className="chaves-home">&#123;</span>
          <div>
            <span className="palavra1">Ola!</span>
            <span className="palavra2"> Eu sou</span>
          </div>
          <span className="palavra3">Leandro Guaraldi</span>
          <span className="palavra4">
            Front End Developer / Web Developer /Wordpress
          </span>
          <span className="chaves-home">&#125;</span>
        </motion.div>

        <Link to={"sobre"} spy={true} smooth={true} duration={1000}>
          <motion.div
            style={{
              width: "30px",
              height: "30px",
              margin: "auto",
            }}
            animate={{
              opacity: [1, 0],
              scale: [1, 1.5],
              y: [0, 25],
            }}
            transition={{ duration: 1, loop: Infinity }}
          >
            <i className=" text-white fas fa-sort-down fa-3x"></i>
          </motion.div>
        </Link>
      </div>
    </styled.ContainerSobre>
  );
}

export default Sobre;
