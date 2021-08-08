import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.special};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 600px) {
    padding: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.specialHover};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
