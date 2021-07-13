import styled from 'styled-components';

export const StyledSignIn = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  span.formError {
    display: block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.special};
    font-size: 0.8rem;
    text-align: center;
  }
`;
