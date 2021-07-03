import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 400px;
  max-width: 100%;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media only screen and (max-width: 500px) {
    padding: 3rem 2rem;
  }
`;
