import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { redirect } from 'utils/helpers/other.helpers';
import { downloadTasks } from 'utils/helpers/tasks.helpers';
import { RootState } from 'utils/store/store';

const Tasks: FunctionComponent = () => {
  const uid = useSelector(({ user }: RootState) => user.uid);
  const history = useHistory();
  const [tasks, setTasks] = useState<ITask[]>();
  useEffect(() => {
    if (uid) {
      const tasksResult = downloadTasks(uid);
      tasksResult.then((x) => {
        setTasks(x);
      });
    } else {
      redirect('/signin', history);
    }
  }, [uid, history]);

  return (
    <>
      <Link to="/signin">Logowanie</Link>
      <Link to="/signup">Rejestracja</Link>;
      {tasks
        ? tasks.map(({ title, body }) => (
            <p>
              {title};{body}
            </p>
          ))
        : null}
    </>
  );
};

export default Tasks;
