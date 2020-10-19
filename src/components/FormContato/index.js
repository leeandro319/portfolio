import React, { useState } from "react";
import firebase from "../../config/firebase";

import * as styled from "./style";

function FormControl() {
  const [carregando, setCarregando] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const db = firebase.firestore();

  function cadastrar(e) {
    setCarregando(1);
    if (nome === "" || email === "" || msg === "") {
      alert("Preencha os dados corretamente.");
      setCarregando(0);
    } else {
      db.collection("contatos")
        .add({
          nome: nome,
          email: email,
          msg: msg,
          dataCriacao: new Date(),
        })
        .then(() => {
          setMsgTipo("sucesso");
          setEmail("");
          setNome("");
          setMsg("");
          setCarregando(0);
        })
        .catch((erro) => {
          setMsgTipo("erro");
          setCarregando(0);
        });
    }
  }

  return (
    <styled.Contatos>
      {carregando > 0 ? (
        <div class="d-flex justify-content-center">
          <div
            style={{ color: "white", margin: "auto" }}
            className="spinner-border"
            role="status"
          ></div>
        </div>
      ) : (
        <form>
          <div className="form">
            <input
              type="text"
              name="name"
              autoComplete="off"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className="label-nome">
              <span className="content-nome">Nome</span>
            </label>
          </div>
          <div className="form">
            <input
              type="text"
              name="email"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label-email">
              <span className="content-email">E-mail</span>
            </label>
          </div>
          <div className="text-area-style">
            <textarea
              placeholder="Mensagem :"
              rows="3"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <div className="text-right">
            <button
              className="btn btn-enviar"
              type="button"
              onClick={cadastrar}
            >
              Enviar
            </button>
          </div>
        </form>
      )}
      <div className="text-center text-white">
        {msgTipo === "sucesso" && <span>Mensagem Enviada</span>}
        {msgTipo === "erro" && <span>Não foi possivel enviar a mensagem!</span>}
      </div>
    </styled.Contatos>
  );
}

export default FormControl;
