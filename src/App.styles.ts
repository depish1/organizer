import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  width: 100%;
  min-height: 100vh;
`;

export const BackgroundWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
