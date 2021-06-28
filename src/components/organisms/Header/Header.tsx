import React, { FunctionComponent } from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { StyledHeader } from './Header.styles';

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <Logo firstLetter="O" restOfText="rg" />
    </StyledHeader>
  );
};

export default Header;
