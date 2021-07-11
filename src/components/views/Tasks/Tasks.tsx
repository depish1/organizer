import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';
import TasksBoard from 'components/organisms/TasksBoard/TasksBoard';
import { getTasksReferrence } from 'utils/firebase/config';
import { StyledTasks } from './Tasks.styles';

const Tasks: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  const [tasks, setTasks] = useState<ITask[]>();

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
        setTasks(tasksArr);
      });
      return () => unsubscribe();
    }
  }, [userId]);

  const expiredTasksFilter = (currentDate: number, taskDate: number): boolean => currentDate > taskDate;
  const todayTasksFilter = (currentDate: number, taskDate: number): boolean => currentDate === taskDate;
  const futureTasksFilter = (currentDate: number, taskDate: number): boolean => currentDate < taskDate;

  const getFilteredTasks = (tasksArr: ITask[], filterFunc: (a: number, b: number) => boolean): ITask[] => {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const newTasks = tasksArr.filter(({ isDone, expireDate }) => {
      if (isDone) return false;
      const taskDate = new Date(expireDate.toDate()).setHours(0, 0, 0, 0);
      return filterFunc(currentDate, taskDate);
    });
    return newTasks.sort((a, b) => a.expireDate - b.expireDate);
  };

  return (
    <StyledTasks>
      {!userId && <Redirect to="/signin" />}
      <TasksBoard headline="Przeterminowane zadania" tasks={tasks && getFilteredTasks(tasks, expiredTasksFilter)} />
      <TasksBoard headline="Dzisiejsze zadania" tasks={tasks && getFilteredTasks(tasks, todayTasksFilter)} />
      <TasksBoard headline="Przyszłe zadania" tasks={tasks && getFilteredTasks(tasks, futureTasksFilter)} />
    </StyledTasks>
  );
};

export default Tasks;
