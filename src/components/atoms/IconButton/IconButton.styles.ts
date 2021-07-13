import styled from 'styled-components';

export const StyledIconButton = styled('button')<{
  hoverColor: string;
}>`
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-right: 0.5rem;

  svg {
    transition: all 0.5s ease-in-out;
    fill: grey;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
    svg {
      fill: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
    }
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.board};
    svg {
      fill: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
    }
  }
`;
