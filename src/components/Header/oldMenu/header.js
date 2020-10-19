import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  height: 74px;
  display: flex;

  .header {
    height: 70px;
    width: 80%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    .logoNav {
      img {
        width: 100%;
      }
    }

    .on {
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: ${(props) => props.theme.colors.backgroundAlt};

      z-index: 10;

      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: center;

      .burguermenu {
        margin: 15px 20px;
      }

      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          li {
            list-style: none;
            color: white;
            padding: 10px;
            font-size: 1.5rem;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .menu-section {
    display: flex;
    justify-content: center;
    align-items: center;
    nav ul {
      display: flex;
      flex-flow: row;
      li {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        list-style: none;
        padding: 15px;
        font-size: 1.5rem;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.textPrimary};
      }
    }

    .burguermenu {
      display: flex;
      flex-direction: column;
      padding-left: 40px;
      padding-right: 25px;

      i {
        background-color: #fff;
        width: 32px;
        height: 4px;
        margin: 4px;
        border-radius: 2px;
        transition: all ease 0.3s;
        opacity: 1;
      }

      .open:nth-child(1) {
        transform: rotate(45deg) translateY(16px);
      }
      .open:nth-child(2) {
        opacity: 0;
      }
      .open:nth-child(3) {
        transform: rotate(-45deg) translateY(-16px);
      }
      .close:nth-child(1) {
        transform: rotate(0) translateY(0);
      }
      .close:nth-child(2) {
        opacity: 1;
      }
      .close:nth-child(3) {
        transform: rotate(0) translateY(0);
      }
    }
  }

  @media (max-width: 700px) {
    .menu-section nav {
      display: none;
    }
  }

  @media (min-width: 701px) {
    .menu-section .burguermenu {
      display: none;
    }
  }
`;
