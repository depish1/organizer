import styled from 'styled-components';

export const StyledFormField = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-top: 1.5rem;
  }

  label {
    width: max-content;
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    position: relative;

    &::after {
      content: '*';
      color: ${({ theme }) => theme.colors.special};
      font-size: 1.5em;
      position: absolute;
      top: -0.4rem;
      right: -0.6rem;
    }
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0.25rem;
    background: transparent;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.special};
    }
  }

  span.error {
    display: block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.special};
    font-size: 0.8rem;
  }
`;
