import React, { FunctionComponent } from 'react';
import { StyledTasksBoard } from './TasksBoard.styles';

interface Props {
  children?: React.ReactNode;
  headline: string;
  emptyMsg: string;
  onClick?: () => void;
}

const TasksBoard: FunctionComponent<Props> = ({ children, headline, emptyMsg }) => {
  return (
    <StyledTasksBoard>
      <h2>{headline}</h2>
      {children}
    </StyledTasksBoard>
  );
};

export default TasksBoard;
