import styled from 'styled-components';

export const LogoContainer = styled.h1`
  display: block;
  font-weight: 400;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 6px;
  position: relative;
  width: 100%;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colors.special};
    z-index: -1;
  }
`;
