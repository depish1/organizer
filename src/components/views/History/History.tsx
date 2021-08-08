import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';
import TasksBoard from 'components/organisms/TasksBoard/TasksBoard';
import { getDoneTasks } from 'utils/firebase/config';
import { Dispatch } from 'redux';

import actions from 'utils/store/actions';
import { StyledHistory } from './History.styles';

const Tasks: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  const [tasks, setTasks] = useState<ITaskState>();
  const dispatch: Dispatch = useDispatch();

  useEffect((): void | (() => void) => {
    if (userId) {
      dispatch(actions.openLoader());
      const unsubscribe = getDoneTasks(userId).onSnapshot((snap) => {
        const tasksArr = snap.docs.map((doc) => {
          const data = doc.data();
          return {
            taskId: doc.id,
            uid: data.uid,
            title: data.title,
            body: data.body,
            createDate: data.createDate,
            expireDate: data.expireDate,
            doneDate: data.doneDate,
            isDone: data.isDone,
            priority: data.priority,
          };
        });
        const TasksToState = {
          history: tasksArr,
        };

        setTasks(TasksToState);
        dispatch(actions.closeLoader());
      });

      return () => unsubscribe();
    }
  }, [userId]);

  return (
    <StyledHistory>
      {!userId && <Redirect to="/signin" />}
      <TasksBoard headline="Wykonane zadania" emptyMsg="Brak wykonanych zadań" tasks={tasks?.history} />
    </StyledHistory>
  );
};

export default Tasks;
