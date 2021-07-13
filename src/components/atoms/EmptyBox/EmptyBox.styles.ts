import styled from 'styled-components';

export const StyledEmptyBox = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    margin-bottom: 0.5rem;
    width: 2rem;
    height: 2rem;
  }
`;
