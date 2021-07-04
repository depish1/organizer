import React, { FunctionComponent, useState } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { firebaseAuth } from 'utils/firebase/config';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import actions from 'utils/store/user/actionCreators';
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
  const [authError, setAuthError] = useState<string | undefined>();
  const dispatch: Dispatch<any> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ email, password }: IFormInputs): Promise<void> => {
    try {
      const response = await firebaseAuth().createUserWithEmailAndPassword(email, password);
      const { user } = response;
      dispatch(actions.login(user!.uid));
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setAuthError('Nieprawidłowy email lub hasło. Spróbuj ponownie.');
      } else {
        setAuthError('Coś poszło nie tak. Spróbuj ponownie później.');
      }
    }
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
        {authError ? <span className="formError">{authError}</span> : null}
        <RedirectFormParagraph paragraphText="Masz już konto?" linkText="Zaloguj się" linkPath="#" />
      </Form>
    </StyledSignUp>
  );
};

export default SignUp;
