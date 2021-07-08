import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'utils/store/store';
import actions from 'utils/store/actions';
import { StyledHamburgerButton } from './HamburgerButton.styles';

const HamburgerButton: FunctionComponent = () => {
  const isOpen = useSelector(({ menu }: RootState) => menu.isOpen);
  const dispatch: Dispatch = useDispatch();

  const handleSwitchMenu = (): void => {
    dispatch(actions.toggleMenu());
  };
  return (
    <StyledHamburgerButton className={isOpen ? 'isOpen' : undefined} onClick={handleSwitchMenu}>
      <span className="hamburger-top" />
      <span className="hamburger-middle" />
      <span className="hamburger-bottom" />
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
