import styled from 'styled-components';

export const LoaderBackground = styled.div`
  position: fixed;
  overflow-y: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
  z-index: 3;
`;

export const StyledLoader = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
