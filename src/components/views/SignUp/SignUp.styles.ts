import styled from 'styled-components';

export const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.black};

  .formError {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.colors.special};
    margin-top: 0.5rem;
    text-align: center;
  }
`;
