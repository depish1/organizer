import React, { FunctionComponent, useState, KeyboardEvent } from 'react';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as IconDone } from 'assets/IconDone.svg';
import { ReactComponent as IconEdit } from 'assets/IconEdit.svg';
import { db } from 'utils/firebase/config';
import { StyledTaskField } from './TaskField.styles';

type Props = {
  task: ITask;
  key: string;
};

const TaskField: FunctionComponent<Props> = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { taskId, uid, title, body, createDate, expireDate, isDone, priority } = task;

  const handleMouseClickTask = (): void => setIsOpen((prevState) => !prevState);
  const handleEnterPressTask = (e: KeyboardEvent): void => {
    if (e.code === 'Enter') setIsOpen((prevState) => !prevState);
  };
  const handleEndTask = async (): Promise<void> => {
    try {
      const taskRef = db.collection('tasks').doc(taskId);
      await taskRef.update({ isDone: true });
    } catch (error) {
      console.error('error');
    }
  };
  const handleEditTask = (): void => {
    console.log('Edytowanie');
  };

  return (
    <StyledTaskField priority={priority} isOpen={isOpen}>
      <div className="top">
        <div className="top-left">
          <div className="priority-label" />
          <header role="button" tabIndex={0} onClick={handleMouseClickTask} onKeyDown={handleEnterPressTask} className="header">
            <h3 className="headline">{title}</h3>
            <p className="date">
              Termin zadania: <span>{expireDate.toDate().toLocaleDateString()}</span>
            </p>
          </header>
        </div>
        <div className="top-right">
          <IconButton handler={handleEditTask} hoverColor="black">
            <IconEdit />
          </IconButton>
          <IconButton handler={handleEndTask} hoverColor="special">
            <IconDone />
          </IconButton>
        </div>
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
