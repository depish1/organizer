import React, { FunctionComponent, useEffect } from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import actions from 'utils/store/user/actionCreators';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './Nav.styles';

const Nav: FunctionComponent = () => {
  return (
    <StyledNav>
      <Logo text="ORGANIZER" />
      <ul>
        <li>
          <NavLink activeClassName="active" to="/tasks">
            <span>Zadania</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/history">
            <span>Historia zadań</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/newtask">
            <span>Nowe zadanie</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/logout">
            <span>Wyloguj</span>
          </NavLink>
        </li>
      </ul>

      <footer>Realizacja Michał Depa.</footer>
    </StyledNav>
  );
};

export default Nav;
