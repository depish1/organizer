import styled from 'styled-components';

export const StyledHamburgerButton = styled.button`
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.1rem;
  width: 2.5rem;
  transition: background-color 0.4s ease;
  border-radius: 0.5rem;
  margin-right: 1rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  transition: all 0.5s ease-in-out;
  z-index: 3;
  &.isOpen {
    transform: rotate(360deg);
  }

  @media only screen and (min-width: 800px) {
    display: none;
  }

  span {
    width: 3rem;
    display: block;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.black};
    transition: all 0.5s ease-in-out;
    &.hamburger- {
      &top {
        transform-origin: left top;
      }
      &bottom {
        transform-origin: left bottom;
      }
    }
  }

  &.isOpen {
    span {
      padding: 0;
      background-color: ${({ theme }) => theme.colors.white};
      &.hamburger- {
        &top {
          transform: rotate(45deg);
        }
        &middle {
          width: 0;
        }
        &bottom {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
