import React, { FunctionComponent } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { StyledSignUp } from './SignUp.styles';

const SignUp: FunctionComponent = () => {
  return (
    <StyledSignUp>
      <Form>
        <Headline text="Zarejestruj się" />
        <FormField id="email" label="Email:" type="email" />
        <FormField id="password" label="Hasło:" type="password" />
        <FormField id="confirmPassword" label="Potwierdź hasło:" type="password" />
        <Button />
        <RedirectFormParagraph paragraphText="Masz już konto?" linkText="Zaloguj się" linkPath="#" />
      </Form>
    </StyledSignUp>
  );
};

export default SignUp;
