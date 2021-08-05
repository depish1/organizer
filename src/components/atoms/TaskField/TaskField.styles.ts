import styled from 'styled-components';

export const StyledTaskField = styled('li')<{
  priority: string;
  isOpen: boolean;
}>`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg};
  background: ${({ theme }) => theme.colors.board};
  color: ${({ theme }) => theme.colors.black};
  
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 1rem;
  }

  .priority-label {
    align-self: stretch;
    width: 0.7rem;
    background-color: ${({ theme, priority }) => theme.colors.priorities[priority]};
  }

  .top {
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height:  5rem;

  }

  .headline {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .date {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    width: max-content;
    span {
      text-decoration: underline;
      margin-left: 0.2rem;
    }
  }

  .bottom {
    padding: 1rem 2.5rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
  }

  .top-left {
    min-height: 100%;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
      padding: .5rem;
    }
  }

  .top-right {
    display: flex;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-self: stretch;
      justify-content: space-around;
    }
  }

  .body {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;
