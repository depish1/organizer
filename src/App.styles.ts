import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
`;
