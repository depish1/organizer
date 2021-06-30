import React, { FunctionComponent } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { StyledSignIn } from './SignIn.styles';

const SignIn: FunctionComponent = () => {
  return (
    <StyledSignIn>
      <Form>
        <Headline text="Zaloguj się" />
        <FormField id="email" label="Email:" type="email" />
        <FormField id="password" label="Hasło:" type="password" />
        <Button />
        <RedirectFormParagraph paragraphText="Nie masz jeszcze konta?" linkText="Zarejestruj się" linkPath="#" />
      </Form>
    </StyledSignIn>
  );
};

export default SignIn;
