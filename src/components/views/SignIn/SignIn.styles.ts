import styled from 'styled-components';

export const StyledSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;

  span.formError {
    display: block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.special};
    font-size: 0.8rem;
    text-align: center;
  }
`;
