import styled from 'styled-components';

const pseudoHeight = '20px';

export const StyledNav = styled.nav`
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
  grid-column: 1;
  font-size: 1.2rem;

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
          background-color: ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.special};
          font-weight: bold;
          cursor: default;
          position: relative;

          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: ${pseudoHeight};
            background-color: ${({ theme }) => theme.colors.bg};
            top: -${pseudoHeight};
            left: 0;
          }
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: ${pseudoHeight};
            background-color: ${({ theme }) => theme.colors.bg};
            bottom: -${pseudoHeight};
            left: 0;
          }

          span {
            &::before {
              content: '';
              display: block;
              position: absolute;
              width: 100%;
              height: ${pseudoHeight};
              background-color: ${({ theme }) => theme.colors.black};
              top: -${pseudoHeight};
              left: 0;
              z-index: 2;
              border-bottom-right-radius: ${pseudoHeight};
            }
            &::after {
              content: '';
              display: block;
              position: absolute;
              width: 100%;
              height: ${pseudoHeight};
              background-color: ${({ theme }) => theme.colors.black};
              bottom: -${pseudoHeight};
              left: 0;
              z-index: 2;
              border-top-right-radius: ${pseudoHeight};
            }
          }
        }
      }
    }
  }

  footer {
    font-size: 0.7rem;
  }
`;
