import styled from 'styled-components';

export const StyledTaskField = styled('li')<{
  priority: string;
  isOpen: boolean;
}>`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg};
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 1rem;
  }

  .priority-label {
    height: 5rem;
    width: 0.7rem;
    background-color: ${({ theme, priority }) => theme.colors.priorities[priority]};
  }

  .top {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    cursor: pointer;
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
    display: grid;
    grid-template-columns: max-content 1fr;
    width: 100%;
  }

  .top-right {
    display: flex;
  }

  .body {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;
