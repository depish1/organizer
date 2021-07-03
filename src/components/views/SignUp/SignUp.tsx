import React, { FunctionComponent } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledSignUp } from './SignUp.styles';

interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Wpisz poprawny adres email').required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane'),
  confirmPassword: yup
    .string()
    .required('To pole jest wymagane')
    .oneOf([yup.ref('password'), null], 'Hasła muszą być jednakowe'),
});

const SignUp: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInputs): void => {
    console.log(data);
  };
  return (
    <StyledSignUp>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Headline text="Zarejestruj się" />
        <FormField id="email" label="Email:">
          <input {...register('email')} type="text" name="email" id="email" />
          <span className="error">errors.email?.message</span>
        </FormField>
        <FormField id="password" label="Hasło:">
          <input {...register('password')} type="password" name="password" id="password" />
          <span className="error">{errors.password?.message}</span>
        </FormField>
        <FormField id="confirmPassword" label="Potwierdź hasło:">
          <input {...register('confirmPassword')} type="password" name="confirmPassword" id="confirmPassword" />
          <span className="error">{errors.confirmPassword?.message}</span>
        </FormField>
        <Button />
        <RedirectFormParagraph paragraphText="Masz już konto?" linkText="Zaloguj się" linkPath="#" />
      </Form>
    </StyledSignUp>
  );
};

export default SignUp;
