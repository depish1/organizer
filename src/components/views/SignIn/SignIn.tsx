import React, { FunctionComponent } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import { StyledSignIn } from './SignIn.styles';

const SignIn: FunctionComponent = () => {
  return (
    <StyledSignIn>
      <Form>
        <FormField id="email" label="Email:" type="email" />
        <FormField id="pwd" label="Hasło:" type="password" />
        <Button />
      </Form>
    </StyledSignIn>
  );
};

export default SignIn;
