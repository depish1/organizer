import React, { FunctionComponent } from 'react';
import { StyledIconButton } from './IconButton.styles';

interface Props {
  children: React.ReactNode;
  hoverColor: string;
  handler: () => void;
}

const IconButton: FunctionComponent<Props> = ({ children, hoverColor, handler }) => {
  return (
    <StyledIconButton onClick={handler} tabIndex={-1} hoverColor={hoverColor}>
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
