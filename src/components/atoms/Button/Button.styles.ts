import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.special};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.specialHover};
  }
`;
