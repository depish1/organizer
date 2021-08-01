import React, { FunctionComponent, useState } from 'react';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { db } from 'utils/firebase/config';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'utils/store/actions';
import { redirect } from 'utils/helpers/other.helpers';
import { useHistory, Redirect } from 'react-router-dom';
import { RootState } from 'utils/store/store';
import { FormWrapper } from 'components/organisms/FormWrapper/FormWrapper.styles';

interface IFormInputs {
  title: string;
  body: string;
  expiredDate: Date;
  priority: TaskPriority;
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Email jest wymagany'),
  body: yup.string().required('Hasło jest wymagane'),
  expiredDate: yup
    .date()
    .required('To pole jest wymagane')
    .min(new Date(), 'Nie masz dodać zadania dla daty z przeszłości')
    .typeError('Podaj poprawną datę.'),
  priority: yup.string().required('To pole jest wymagane'),
});

const NewTask: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  const history = useHistory();
  const [addError, setAddError] = useState<string | undefined>();
  const dispatch: Dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ title, body, expiredDate, priority }: IFormInputs): Promise<void> => {
    try {
      const newTaskData = {
        title,
        body,
        expireDate: expiredDate,
        createDate: new Date(),
        priority,
        uid: userId!,
        isDone: false,
      };
      db.collection('tasks').add(newTaskData);
      redirect('/tasks', history);
    } catch (error) {
      setAddError('Coś poszło nie tak. Spróbuj ponownie później.');
    }
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {!userId && <Redirect to="/signin" />}

      <Headline isTop text="Dodaj zadanie" />
      <FormField id="title" label="Tytuł:">
        <input {...register('title')} type="text" name="title" id="title" />
        <span className="error">{errors.title?.message}</span>
      </FormField>
      <FormField id="body" label="Treść:">
        <input {...register('body')} type="text" name="body" id="body" />
        <span className="error">{errors.body?.message}</span>
      </FormField>
      <FormField id="expiredDate" label="Termin zadania:">
        <input {...register('expiredDate')} type="date" name="expiredDate" id="expiredDate" />
        <span className="error">{errors.expiredDate?.message}</span>
      </FormField>
      <FormField id="priority" label="Priorytet:">
        <select {...register('priority')} name="priority" id="priority">
          <option value="">--Wybierz priorytet--</option>
          <option value="low">Niski</option>
          <option value="medium">Średni</option>
          <option value="high">Wysoki</option>
        </select>
        <span className="error">{errors.priority?.message}</span>
      </FormField>

      <Button text="Dodaj zadanie" />
      {addError ? <span className="formError">{addError}</span> : null}
    </FormWrapper>
  );
};

export default NewTask;
