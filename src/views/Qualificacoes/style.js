import styled from "styled-components";

export const Qualificacoes = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  .slider-div {
    padding: 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.theme.colors.textSecundary} !important;
  }
  h1 {
    color: ${(props) => props.theme.colors.textSecundary};
  }
  span {
    color: ${(props) => props.theme.colors.textAlternative};
  }
  @media (min-width: 300px) {
    padding: 14% 0;
  }
  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    padding: 10% 0;
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 6% 0;
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    padding: 6% 0;
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    padding: 6% 0;
  }
`;
