import styled from 'styled-components';

const pseudoHeight = '20px';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

export const StyledNav = styled.nav<Props>`
  width: 300px;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 3rem 0;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    position: fixed;
    transition: all 0.5s ease-in-out;
    padding-top: 5rem;
    left: ${(props) => (props.isOpen ? '0' : '-100%')};
    top: ${(props) => (props.isOpen ? '0' : '-100vh')};
    z-index: 2;
    box-shadow: none;
  }

  ul {
    list-style-type: none;

    li {
      a {
        color: ${({ theme }) => theme.colors.white};
        display: inline-block;
        width: 100%;
        text-decoration: none;
        cursor: pointer;

        span {
          display: block;
          width: 100%;
          padding: ${pseudoHeight} 0;
          position: relative;
        }

        &:hover {
          font-weight: bold;
        }

        &.active {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.special};
          font-weight: bold;
          cursor: default;
          position: relative;
        }
      }
    }
  }

  footer {
    font-size: 0.7rem;
  }
`;
