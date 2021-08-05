import styled from 'styled-components';

export const StyledHistory = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;