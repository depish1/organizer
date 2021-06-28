import React, { FunctionComponent } from 'react';
import { LogoContainer } from './Logo.styles';

type Props = {
  restOfText: string;
  firstLetter: string;
};

const Logo: FunctionComponent<Props> = ({ firstLetter, restOfText }) => {
  return (
    <LogoContainer>
      <h1 className="logo-text">
        <span className="first-letter">{firstLetter}</span>
        {restOfText}
      </h1>
      <div className="logo-bg" />
    </LogoContainer>
  );
};

export default Logo;
