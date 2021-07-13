import styled from 'styled-components';

export const StyledSignUp = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  .formError {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.colors.special};
    margin-top: 0.5rem;
    text-align: center;
  }
`;
