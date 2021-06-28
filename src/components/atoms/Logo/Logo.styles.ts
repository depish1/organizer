import styled from 'styled-components';

export const LogoContainer = styled.div`
  height: calc(${({ theme }) => theme.headerHeight} - 2rem);
  margin: 1rem 0;
  display: flex;
  cursor: pointer;
  position: relative;

  .logo-text {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    font-weight: bold;
    position: relative;
    z-index: 2;

    .first-letter {
      position: relative;

      margin: 0 0.5rem;
      &::before {
        content: '';
        display: block;
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.special};
        position: absolute;
        border-radius: 0.8rem;
        left: 50%;
        top: 50%;
        z-index: -1;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
`;
