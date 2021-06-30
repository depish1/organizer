import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  margin-top: 2.5rem;
  background-color: ${({ theme }) => theme.colors.special};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 2.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.specialHover};
  }
`;
