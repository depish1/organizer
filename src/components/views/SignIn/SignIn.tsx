import React, { FunctionComponent } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledSignIn } from './SignIn.styles';

interface IFormInputs {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Wpisz poprawny adres email').required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane'),
});

const SignIn: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInputs): void => {
    console.log(data);
  };
  return (
    <StyledSignIn>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Headline text="Zaloguj się" />
        <FormField id="email" label="Email:">
          <input {...register('email')} type="text" id="email" name="email" />
          <span className="error">{errors.email?.message}</span>
        </FormField>
        <FormField id="password" label="Hasło:">
          <input {...register('password')} id="password" name="password" type="password" />
          <span className="error">{errors.password?.message}</span>
        </FormField>
        <Button />
        <RedirectFormParagraph paragraphText="Nie masz jeszcze konta?" linkText="Zarejestruj się" linkPath="#" />
      </Form>
    </StyledSignIn>
  );
};

export default SignIn;
