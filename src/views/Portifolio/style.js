import styled from "styled-components";

export const PortContainer = styled.div`
  height: auto;
  padding: 5% 0;
  background: ${(props) => props.theme.colors.primary};

  h1 {
    padding: 30px 0;
    color: ${(props) => props.theme.colors.secundary};
  }
  p {
    padding: 20px 0;
    color: ${(props) => props.theme.colors.textPrimary};
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
