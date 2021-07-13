import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const BackgroundWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
