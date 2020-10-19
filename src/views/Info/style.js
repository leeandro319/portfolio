import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: auto;
  padding: 6% 0;
  .InfoSobre {
    h1 {
      padding-bottom: 40px;
      color: ${(props) => props.theme.colors.textSecundary};
    }
    p {
      padding: 5px;
      text-align: justify;
      font-size: 1.6rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.textAlternative};
    }
  }
  img {
    width: 280px;
    border-radius: 100px;
  }
`;
