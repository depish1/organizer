import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';

const Home: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);

  return <>{userId ? <Redirect to="/tasks" /> : <Redirect to="/signin" />}</>;
};

export default Home;
