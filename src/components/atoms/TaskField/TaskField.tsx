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
  const { taskId, title, body, createDate, doneDate, expireDate, priority, isDone } = task;

  const handleMouseClickTask = (): void => setIsOpen((prevState) => !prevState);
  const handleEnterPressTask = (e: KeyboardEvent): void => {
    if (e.code === 'Enter') setIsOpen((prevState) => !prevState);
  };
  const handleEndTask = async (): Promise<void> => {
    try {
      const taskRef = db.collection('tasks').doc(taskId);
      await taskRef.update({ isDone: true, doneDate: new Date() });
    } catch (error) {
      console.error('error');
    }
  };
  const handleEditTask = (): void => {
    console.log('Edytowanie');
  };
  

  return (
    <StyledTaskField priority={priority} isOpen={isOpen} >
      <div className="top">
      <div className="priority-label" />
        <div className="top-left" role="button" tabIndex={0} onClick={handleMouseClickTask} onKeyDown={handleEnterPressTask}>
            <h3 className="headline">{title}</h3>
            {isDone ?
            <p className="date">
              Wykonano: <span>{doneDate.toDate().toLocaleDateString()}</span>
            </p>
            :
            <p className="date">
              Termin zadania: <span>{expireDate.toDate().toLocaleDateString()}</span>
            </p>
            }
        </div>
        {!isDone && 
        <div className="top-right">
          <IconButton handler={handleEditTask} hoverColor="black">
            <IconEdit />
          </IconButton>
          <IconButton handler={handleEndTask} hoverColor="special">
            <IconDone />
          </IconButton>
        </div>
        }
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
