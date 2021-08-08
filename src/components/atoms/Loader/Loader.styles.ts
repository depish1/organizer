import styled, { keyframes } from 'styled-components';

const spin = keyframes` 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } `;

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
  animation: ${spin} 4s linear infinite;
`;
