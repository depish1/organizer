import React, { FunctionComponent } from 'react';
import { StyledFormField } from './FormField.styles';

interface Props {
  label: string;
  id: string;
  type: string;
}

const FormField: FunctionComponent<Props> = ({ label, id, type }) => {
  return (
    <StyledFormField htmlFor={id}>
      <span>{label}</span>
      <input type={type} id={id} name={id} />
    </StyledFormField>
  );
};

export default FormField;
