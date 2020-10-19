import styled from "styled-components";

export const Card = styled.div`
  .rowCard {
    .cardStyle {
      padding: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        color: ${(props) => props.theme.colors.secundary};
      }
      button {
        background-color: ${(props) => props.theme.colors.secundary};
        margin-right: 15px;
        font-size: 1.6rem;
        transition: all 0.3s ease;

        :hover {
          background-color: ${(props) => props.theme.colors.secundary};
        }
      }
    }
  }

  @media (min-width: 300px) {
    .cardStyle {
      padding: 15px;
    }
  }
  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .cardStyle {
      padding: 15px;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .cardStyle {
      padding: 0px;
    }
  }
`;
