import React, { FunctionComponent, useState, useEffect } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import RedirectFormParagraph from 'components/atoms/RedirectFormParagraph/RedirectFormParagraph';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import firebase from 'utils/firebase/config';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'utils/store/user/actionCreators';
import { redirect } from 'utils/helpers';
import { useHistory } from 'react-router-dom';
import { RootState } from 'utils/store/store';
import { StyledSignIn } from './SignIn.styles';

interface IFormInputs {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Email jest wymagany').email('Wpisz poprawny adres email'),
  password: yup.string().required('Hasło jest wymagane'),
});

const SignIn: FunctionComponent = () => {
  const uid = useSelector(({ user }: RootState) => user.uid);
  const history = useHistory();
  useEffect(() => {
    if (uid) redirect('/tasks', history);
  }, [uid, history]);

  const [authError, setAuthError] = useState<string | undefined>();

  const dispatch: Dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ email, password }: IFormInputs): Promise<void> => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      const { user } = response;
      dispatch(actions.login(user!.uid));
      redirect('/tasks', history);
    } catch (error) {
      setAuthError('Coś poszło nie tak. Spróbuj ponownie później.');
    }
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
        {authError ? <span className="formError">{authError}</span> : null}
        <RedirectFormParagraph paragraphText="Nie masz jeszcze konta?" linkText="Zarejestruj się" linkPath="/signup" />
      </Form>
    </StyledSignIn>
  );
};

export default SignIn;
