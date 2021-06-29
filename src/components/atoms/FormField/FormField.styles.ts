import styled from 'styled-components';

export const StyledFormField = styled.label`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
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
    height: 2.5rem;
    display: block;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 0.5rem;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.special};
    }
  }
`;
