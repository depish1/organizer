import React, { FunctionComponent } from 'react';
import { ReactComponent as IconSmile } from 'assets/IconSmile.svg';
import { StyledEmptyBox } from './EmptyBox.styles';

type Props = {
  text: string;
};
const EmptyBox: FunctionComponent<Props> = ({ text }) => {
  return (
    <StyledEmptyBox>
      <IconSmile />
      <p>{text}</p>
    </StyledEmptyBox>
  );
};

export default EmptyBox;
