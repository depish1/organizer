import styled from 'styled-components';

export const StyledTasksBoard = styled.div`
  background-color: ${({ theme }) => theme.colors.board};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 1rem 0;
  overflow: hidden;
  h2 {
    display: block;
    width: 100%;
    padding: 1rem 2.5rem;
  }

  ul {
    width: 100%;
    list-style: none;
  }
`;
