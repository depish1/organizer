import React, { FunctionComponent } from 'react';
import { StyledForm } from './Form.styles';

interface Props {
  children: React.ReactNode;
  onSubmit: any;
}

const Form: FunctionComponent<Props> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
