import styled from "styled-components";

export const Contatos = styled.div`
  height: 100vh;
  padding: 10% 0;
  background-color: ${(props) => props.theme.colors.primary};

  h1 {
    color: ${(props) => props.theme.colors.secundary};
  }
  span {
    color: ${(props) => props.theme.colors.textPrimary};
  }
  .links-contato {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .itens-contato {
    display: flex;
    align-items: center;
    margin: 10px;

    img {
      width: 9%;
      color: ${(props) => props.theme.colors.secundary};
    }

    p {
      padding-top: 2px;
      padding-left: 15px;
      color: ${(props) => props.theme.colors.textPrimary};
    }
  }

  @media (min-width: 300px) {
  }
  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
`;
