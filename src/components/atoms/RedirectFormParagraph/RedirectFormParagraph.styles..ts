import styled from 'styled-components';

export const StyledRedirectFormParagraph = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  span {
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    color: ${({ theme }) => theme.colors.special};
    text-decoration: underline;
    font-weight: bold;
    margin-top: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.specialHover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
