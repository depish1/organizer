import React, { FunctionComponent } from 'react';
import { LogoContainer } from './Logo.styles';

type Props = {
  text: string;
};

const Logo: FunctionComponent<Props> = ({ text }) => {
  return <LogoContainer>{text}</LogoContainer>;
};

export default Logo;
