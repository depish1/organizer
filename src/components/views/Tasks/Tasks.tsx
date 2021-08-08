import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';
import TasksBoard from 'components/organisms/TasksBoard/TasksBoard';
import { getTasksReferrence } from 'utils/firebase/config';
import { getFilteredTasks, filterTasksFunc } from 'utils/helpers/tasks.helpers';
import { Dispatch } from 'redux';

import actions from 'utils/store/actions';
import { StyledTasks } from './Tasks.styles';

const Tasks: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  const [tasks, setTasks] = useState<ITaskState>();
  const dispatch: Dispatch = useDispatch();

  useEffect((): void | (() => void) => {
    if (userId) {
      dispatch(actions.openLoader());
      const unsubscribe = getTasksReferrence(userId).onSnapshot((snap) => {
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
        const filteredTasks = {
          expired: getFilteredTasks(tasksArr, filterTasksFunc.expired),
          today: getFilteredTasks(tasksArr, filterTasksFunc.today),
          future: getFilteredTasks(tasksArr, filterTasksFunc.future),
        };
        setTasks(filteredTasks);
        dispatch(actions.closeLoader());
      });

      return () => unsubscribe();
    }
  }, [userId, dispatch]);

  return (
    <StyledTasks>
      {!userId && <Redirect to="/signin" />}
      <TasksBoard headline="Przeterminowane zadania" emptyMsg="Brak przeterminowanych zadań" tasks={tasks?.expired} />
      <TasksBoard headline="Dzisiejsze zadania" emptyMsg="Brak zadań na dzisiaj" tasks={tasks?.today} />
      <TasksBoard headline="Przyszłe zadania" emptyMsg="Brak zaplanowanych zadań" tasks={tasks?.future} />
    </StyledTasks>
  );
};

export default Tasks;
