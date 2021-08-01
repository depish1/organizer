import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';
import TasksBoard from 'components/organisms/TasksBoard/TasksBoard';
import { getTasksReferrence } from 'utils/firebase/config';
import { getFilteredTasks, filterTasksFunc } from 'utils/helpers/tasks.helpers';
import { StyledTasks } from './Tasks.styles';

const Tasks: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  const [tasks, setTasks] = useState<ITaskState>();

  useEffect((): void | (() => void) => {
    if (userId) {
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
      });
      return () => unsubscribe();
    }
  }, [userId]);

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
