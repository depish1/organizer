import React, { FunctionComponent, useEffect } from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'utils/store/actions';
import { NavLink } from 'react-router-dom';
import { RootState } from 'utils/store/store';
import { StyledNav } from './Nav.styles';

const Nav: FunctionComponent = () => {
  const isOpen = useSelector(({ menu }: RootState) => menu.isOpen);
  const dispatch: Dispatch = useDispatch();

  const handleCloseMenu = (): void => {
    dispatch(actions.toggleMenu());
  };
  return (
    <StyledNav isOpen={isOpen}>
      <Logo text="ORGANIZER" />
      <ul>
        <li>
          <NavLink onClick={handleCloseMenu} activeClassName="active" to="/tasks">
            <span>Zadania</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleCloseMenu} activeClassName="active" to="/history">
            <span>Historia zadań</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleCloseMenu} activeClassName="active" to="/newtask">
            <span>Nowe zadanie</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleCloseMenu} activeClassName="active" to="/logout">
            <span>Wyloguj</span>
          </NavLink>
        </li>
      </ul>

      <footer>Realizacja Michał Depa.</footer>
    </StyledNav>
  );
};

export default Nav;
