import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.special};
`;
