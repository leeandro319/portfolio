import styled from "styled-components";

export const NavContainer = styled.div`
  ul {
    li {
      a {
        cursor: pointer;
        color: ${(props) => props.theme.colors.textPrimary};
        :hover {
          color: ${(props) => props.theme.colors.secundary};
        }
        &.active {
          color: ${(props) => props.theme.colors.secundary};
        }
      }
      &:last-child {
        padding-left: 20px;
      }
    }
  }

  .navbar {
    background-color: ${(props) => props.theme.colors.primary};
  }

  button {
    border: none;
    :focus {
      outline: none;
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
`;
