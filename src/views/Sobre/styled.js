import styled from "styled-components";

export const ContainerSobre = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 40px 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .apresentacaoNome {
    max-width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: auto;

    .chaves-home {
      color: ${(props) => props.theme.colors.secundary};
      font-size: 3rem;
      padding: 15px 0;
    }
    .palavra1 {
      font-size: 8rem;
      color: ${(props) => props.theme.colors.textPrimary};
      text-transform: uppercase;
    }
    .palavra2 {
      color: ${(props) => props.theme.colors.textPrimary};
      font-size: 5rem;
    }
    .palavra3 {
      font-size: 5.9rem;
      color: ${(props) => props.theme.colors.textPrimary};
      text-transform: uppercase;
      margin-top: -4%;
    }
    .palavra4 {
      font-weight: 100;
      font-size: 2.6rem;
      color: ${(props) => props.theme.colors.textPrimary};
      margin-top: -20px;
    }
  }

  @media (min-width: 300px) {
    .apresentacaoNome {
      .palavra1 {
        font-size: 5.5rem;
      }
      .palavra2 {
        font-size: 4.4rem;
      }
      .palavra3 {
        font-size: 7rem;
        line-height: 7.2rem;

        :first-child {
          padding-top: 40px;
        }
      }
      .palavra4 {
        font-size: 2rem;
        margin-top: -2.4px;
      }
    }
  }
  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .apresentacaoNome {
      .palavra1 {
        font-size: 5.5rem;
      }
      .palavra2 {
        font-size: 4.4rem;
      }
      .palavra3 {
        font-size: 7rem;
        line-height: 7.2rem;

        :first-child {
          padding-top: 40px;
        }
      }
      .palavra4 {
        font-size: 2rem;
        margin-top: -2.4px;
      }
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .apresentacaoNome {
      .palavra1 {
        font-size: 6rem;
      }
      .palavra2 {
        font-size: 4rem;
      }
      .palavra3 {
        font-size: 5.5rem;
        margin-top: -18px;
      }
      .palavra4 {
        font-size: 2.4rem;
        margin-top: -9px;
      }
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .apresentacaoNome {
      .chaves-home {
        font-size: 3rem;
        padding: 15px 0;
      }
      .palavra1 {
        font-size: 7.2rem;
      }
      .palavra2 {
        font-size: 5rem;
      }
      .palavra3 {
        font-size: 7.2rem;
      }
      .palavra4 {
        font-size: 3rem;
        margin-top: 1px;
      }
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .apresentacaoNome {
      .chaves-home {
        font-size: 3rem;
        padding: 15px 0;
      }
      .palavra1 {
        font-size: 8rem;
      }
      .palavra2 {
        font-size: 5rem;
      }
      .palavra3 {
        font-size: 8rem;
      }
      .palavra4 {
        font-size: 3rem;
        margin-top: 1px;
      }
    }
  }
`;
