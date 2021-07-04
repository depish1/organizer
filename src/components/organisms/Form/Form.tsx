import React, { FunctionComponent } from 'react';
import { StyledForm } from './Form.styles';

interface Props {
  children: React.ReactNode;
  onSubmit: () => Promise<void>;
}

const Form: FunctionComponent<Props> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
