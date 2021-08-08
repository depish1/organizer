import React, { FunctionComponent, useState, KeyboardEvent } from 'react';
import IconButton from 'components/atoms/IconButton/IconButton';
import useModal from 'components/organisms/Modal/useModal';
import { ReactComponent as IconDone } from 'assets/IconDone.svg';
import { ReactComponent as IconEdit } from 'assets/IconEdit.svg';
import { db } from 'utils/firebase/config';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import actions from 'utils/store/actions';
import { StyledTaskField } from './TaskField.styles';

type Props = {
  task: ITask;
  key: string;
};

const TaskField: FunctionComponent<Props> = ({ task }) => {
  const { Modal, modalOption, handleCloseModal, handleOpenModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const { title, body, createDate, doneDate, expireDate, priority, isDone } = task;
  const dispatch: Dispatch = useDispatch();

  const handleMouseClickTask = (): void => setIsOpen((prevState) => !prevState);
  const handleEnterPressTask = (e: KeyboardEvent): void => {
    if (e.code === 'Enter') setIsOpen((prevState) => !prevState);
  };
  const handleEndTask = async (taskId: string): Promise<void> => {
    dispatch(actions.openLoader());
    const taskRef = db.collection('tasks').doc(taskId);
    await taskRef.update({ isDone: true, doneDate: new Date() });
    dispatch(actions.closeLoader());
  };

  return (
    <StyledTaskField priority={priority} isOpen={isOpen}>
      <div className="top">
        <div className="priority-label" />
        <div className="top-left" role="button" tabIndex={0} onClick={handleMouseClickTask} onKeyDown={handleEnterPressTask}>
          <h3 className="headline">{title}</h3>
          {isDone ? (
            <p className="date">
              Wykonano: <span>{doneDate.toDate().toLocaleDateString()}</span>
            </p>
          ) : (
            <p className="date">
              Termin zadania: <span>{expireDate.toDate().toLocaleDateString()}</span>
            </p>
          )}
        </div>
        {!isDone && (
          <div className="top-right">
            {' '}
            <IconButton handler={() => handleOpenModal(task.taskId)} hoverColor="black">
              <IconEdit />
            </IconButton>
            {modalOption.isOpen && modalOption.id === task.taskId && (
              <Modal dataset={task} handleCloseModal={handleCloseModal} taskId={task.taskId} />
            )}
            <IconButton handler={() => handleEndTask(task.taskId)} hoverColor="special">
              <IconDone />
            </IconButton>
          </div>
        )}
      </div>
      <div className="bottom">
        <p className="date">
          Utworzono: <span>{createDate.toDate().toLocaleDateString()}</span>
        </p>
        <p className="body">{body}</p>
      </div>
    </StyledTaskField>
  );
};

export default TaskField;
