import React, { FunctionComponent } from 'react';
import { StyledForm } from './Form.styles';

const Form: FunctionComponent = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
