import styled from 'styled-components';

export const StyledModalBackground = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalBackground = styled.div`
  position: fixed;
  overflow-y: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
`;
