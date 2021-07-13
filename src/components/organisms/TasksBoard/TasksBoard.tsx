import React, { FunctionComponent } from 'react';
import TaskField from 'components/atoms/TaskField/TaskField';
import EmptyBox from 'components/atoms/EmptyBox/EmptyBox';
import { StyledTasksBoard } from './TasksBoard.styles';

interface Props {
  tasks?: ITask[];
  headline: string;
  emptyMsg: string;
  onClick?: () => void;
}

const TasksBoard: FunctionComponent<Props> = ({ headline, tasks, emptyMsg }) => {
  const getContentToRender = (): React.ReactNode => {
    if (!tasks) return null;
    return tasks.length === 0 ? (
      <EmptyBox text={emptyMsg} />
    ) : (
      <ul>
        {tasks.map((task) => (
          <TaskField key={task.taskId} task={task} />
        ))}
      </ul>
    );
  };
  return (
    <StyledTasksBoard>
      <h2>{headline}</h2>
      {getContentToRender()}
    </StyledTasksBoard>
  );
};

export default TasksBoard;
