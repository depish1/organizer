import React, { FunctionComponent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import actions from 'utils/store/actions';
import { db } from 'utils/firebase/config';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'utils/store/store';
import { FormWrapper } from 'components/organisms/FormWrapper/FormWrapper.styles';
import { StyledModalBackground, ModalBackground } from './Modal.styles';

const modalContainer = document.querySelector('#modal-container');

const yesterday = new Date(Date.now() - 86400000);

const validationSchema = yup.object().shape({
  title: yup.string().required('Email jest wymagany'),
  body: yup.string().required('Hasło jest wymagane'),
  expireDate: yup
    .date()
    .required('To pole jest wymagane')
    .min(yesterday, 'Nie masz dodać zadania dla daty z przeszłości')
    .typeError('Podaj poprawną datę.'),
  priority: yup.string().required('To pole jest wymagane'),
});

const Modal: FunctionComponent<ModalProps> = ({ dataset, handleCloseModal, taskId }) => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  const [addError, setAddError] = useState<string | undefined>();

  const dispatch: Dispatch = useDispatch();

  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer!.append(modalNode);
    return () => {
      modalNode.remove();
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: { ...dataset, expireDate: dataset.expireDate.toDate().toISOString().slice(0, 10) },
  });

  const onSubmit = async ({ title, body, expireDate, priority }: IFormInputs): Promise<void> => {
    dispatch(actions.openLoader());
    try {
      const updatedData = {
        title,
        body,
        expireDate,
        priority,
      };
      db.collection('tasks').doc(taskId).update(updatedData);
      handleCloseModal();
    } catch (error) {
      setAddError('Coś poszło nie tak. Spróbuj ponownie później.');
    }
    dispatch(actions.closeLoader());
  };

  const handleBackgroundClose = (e: React.MouseEvent<HTMLElement>): void => {
    if ((e.target as HTMLElement).id === 'modal-bg') handleCloseModal();
  };

  return createPortal(
    <ModalBackground id="modal-bg" onClick={handleBackgroundClose}>
      <StyledModalBackground>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          {!userId && <Redirect to="/signin" />}
          <Headline isTop text="Edytuj zadanie" />
          <FormField id="title" label="Tytuł:">
            <input {...register('title')} type="text" name="title" id="title" />
            <span className="error">{errors.title?.message}</span>
          </FormField>
          <FormField id="body" label="Treść:">
            <input {...register('body')} type="text" name="body" id="body" />
            <span className="error">{errors.body?.message}</span>
          </FormField>
          <FormField id="expiredDate" label="Termin zadania:">
            <input {...register('expireDate')} type="date" name="expireDate" id="expireDate" />
            <span className="error">{errors.expireDate?.message}</span>
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

          <Button text="Zapisz zmiany" />
          {addError ? <span className="formError">{addError}</span> : null}
        </FormWrapper>
      </StyledModalBackground>
    </ModalBackground>,
    modalNode
  );
};

export default Modal;
