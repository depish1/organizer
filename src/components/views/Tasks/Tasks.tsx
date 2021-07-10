import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { redirect } from 'utils/helpers/other.helpers';
import { RootState } from 'utils/store/store';
import TasksBoard from 'components/organisms/TasksBoard/TasksBoard';
import { getTasksReferrence } from 'utils/firebase/config';
import { StyledTasks } from './Tasks.styles';

const Tasks: FunctionComponent = () => {
  const uid = useSelector(({ user }: RootState) => user.uid);
  const history = useHistory();
  const [tasks, setTasks] = useState<ITask[]>();

  useEffect((): void | (() => void) => {
    if (uid) {
      const unsubscribe = getTasksReferrence(uid).onSnapshot((snap) => {
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
    redirect('/signin', history);
  }, [uid, history]);

  return (
    <StyledTasks>
      <TasksBoard headline="Zadania na dziś" emptyMsg="Brak zadań na dziś">
        {tasks
          ? tasks.map(({ title, body, taskId }) => (
              <div key={taskId}>
                {title};{body}
              </div>
            ))
          : null}
      </TasksBoard>
      <TasksBoard headline="Przyszłe zadania" emptyMsg="Brak zadań na dziś">
        {tasks
          ? tasks.map(({ title, body, taskId }) => (
              <div key={taskId}>
                {title};{body}
              </div>
            ))
          : null}
      </TasksBoard>
      <TasksBoard headline="Zakończone zadania" emptyMsg="Brak zadań na dziś">
        {tasks
          ? tasks.map(({ title, body, taskId }) => (
              <div key={taskId}>
                {title};{body}
              </div>
            ))
          : null}
      </TasksBoard>
    </StyledTasks>
  );
};

export default Tasks;
