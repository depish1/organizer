import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.black};
  width: 400px;
  max-width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.special};
`;
