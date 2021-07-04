import styled from 'styled-components';

export const StyledHeadline = styled.h2`
  display: inline-block;
  width: max-content;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  z-index: 1;

  &::before {
    z-index: -1;
    content: '';
    background-color: ${({ theme }) => theme.colors.special};
    height: 30%;
    width: 110%;
    bottom: 0px;
    left: 0px;
    position: absolute;
  }
`;
