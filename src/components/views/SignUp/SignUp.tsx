import React, { FunctionComponent, useState } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { auth } from 'utils/firebase/config';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'utils/store/actions';
import { redirect } from 'utils/helpers/other.helpers';
import { useHistory, Redirect } from 'react-router-dom';
import { RootState } from 'utils/store/store';
import { FormWrapper } from 'components/organisms/FormWrapper/FormWrapper.styles';

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
  const userId = useSelector(({ user }: RootState) => user.uid);
  const history = useHistory();
  const [authError, setAuthError] = useState<string | undefined>();
  const dispatch: Dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ email, password }: IFormInputs): Promise<void> => {
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      const { user } = response;
      const { uid } = user!;
      dispatch(actions.login(uid));
      redirect('/tasks', history);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setAuthError('Istnieje konto o podanym adresie email.');
      } else {
        setAuthError('Coś poszło nie tak. Spróbuj ponownie później.');
      }
    }
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {userId && <Redirect to="/tasks" />}
      <Logo text="ORGANIZER" />
      <Headline text="Zarejestruj się" />
      <FormField id="email" label="Email:">
        <input {...register('email')} type="text" name="email" id="email" />
        <span className="error">{errors.email?.message}</span>
      </FormField>
      <FormField id="password" label="Hasło:">
        <input {...register('password')} type="password" name="password" id="password" />
        <span className="error">{errors.password?.message}</span>
      </FormField>
      <FormField id="confirmPassword" label="Potwierdź hasło:">
        <input {...register('confirmPassword')} type="password" name="confirmPassword" id="confirmPassword" />
        <span className="error">{errors.confirmPassword?.message}</span>
      </FormField>
      <Button text="Zarejestruj się" />
      {authError ? <span className="formError">{authError}</span> : null}
      <RedirectFormParagraph paragraphText="Masz już konto?" linkText="Zaloguj się" linkPath="/signin" />
    </FormWrapper>
  );
};

export default SignUp;
