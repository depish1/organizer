import React, { FunctionComponent } from 'react';
import TaskField from 'components/atoms/TaskField/TaskField';
import { StyledTasksBoard } from './TasksBoard.styles';

interface Props {
  tasks?: ITask[];
  headline: string;
  onClick?: () => void;
}

const TasksBoard: FunctionComponent<Props> = ({ headline, tasks }) => {
  return (
    <StyledTasksBoard>
      <h2>{headline}</h2>
      {tasks ? (
        <ul>
          {tasks.map((task) => (
            <TaskField key={task.taskId} task={task} />
          ))}
        </ul>
      ) : null}
    </StyledTasksBoard>
  );
};

export default TasksBoard;
