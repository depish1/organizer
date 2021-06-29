import styled from 'styled-components';

export const StyledSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight});
`;
