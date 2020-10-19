import styled from "styled-components";

export const Contatos = styled.div`
  padding: 30px 0;
  .form {
    width: 90%;
    position: relative;
    height: 50px;
    overflow: hidden;

    input {
      width: 100%;
      height: 100%;
      color: ${(props) => props.theme.colors.textPrimary};
      padding-top: 20px;
      border: none;
      outline: none;
      background-color: ${(props) => props.theme.colors.primary} !important;
    }

    label {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-bottom: 1px solid #fff;
    }

    label::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: -1px;
      left: 0px;
      border-bottom: 2px solid ${(props) => props.theme.colors.secundary};
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }
    .content-nome,
    .content-email {
      position: absolute;
      bottom: 5px;
      left: 0px;
      transition: all 0.3s ease;
    }

    input:focus + .label-nome .content-nome,
    input:valid + .label-nome .content-nome,
    input:focus + .label-email .content-email,
    input:valid + .label-email .content-email {
      transform: translateY(-80%);
      font-size: 14px;
      color: ${(props) => props.theme.colors.secundary};
    }

    input:focus + .label-nome::after,
    input:valid + .label-nome::after,
    input:focus + .label-email::after,
    input:valid + .label-email::after {
      transform: translateX(0%);
    }
  }
  .text-area-style {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    overflow: hidden;

    textarea {
      width: 90%;
      height: 100%;
      color: white;
      border: none;
      outline: none;
      background-color: ${(props) => props.theme.colors.primary};
      border-bottom: 1px solid white;
      border-radius: 2px;
      transition: all 0.3s ease;
      ::placeholder {
        color: white;
      }
      &:focus {
        border: 2px solid ${(props) => props.theme.colors.secundary};
        padding: 10px;
        color: white;
      }
    }
  }

  .btn-enviar {
    margin-top: 10px;
    margin-right: 10%;
    padding: 05px 10px;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secundary};
    font-size: 1.6rem;
  }
`;
