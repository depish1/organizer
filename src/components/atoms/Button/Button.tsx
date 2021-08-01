import React, { FunctionComponent } from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  text: string;
}

const Button: FunctionComponent<Props> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
