import { FunctionComponent, useEffect } from 'react';
import { redirect } from 'utils/helpers';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';

const Home: FunctionComponent = (): null => {
  const uid = useSelector(({ user }: RootState) => user.uid);
  const history = useHistory();
  useEffect(() => {
    if (uid) {
      redirect('/tasks', history);
    } else {
      redirect('/signin', history);
    }
  }, [uid, history]);
  return null;
};

export default Home;
