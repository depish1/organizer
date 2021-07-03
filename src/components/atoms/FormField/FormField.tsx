import React, { FunctionComponent } from 'react';
import { StyledFormField } from './FormField.styles';

interface Props {
  label: string;
  id: string;
  children: React.ReactNode;
}

const FormField: FunctionComponent<Props> = ({ label, id, children }) => {
  return (
    <StyledFormField>
      <label htmlFor={id}>{label}</label>
      {children}
    </StyledFormField>
  );
};

export default FormField;
