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

    &:hover {
      color: ${({ theme }) => theme.colors.specalHover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
