import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Tasks: FunctionComponent = () => {
  return (
    <>
      <Link to="/signin">Logowanie</Link>
      <Link to="/signup">Rejestracja</Link>;
    </>
  );
};

export default Tasks;
