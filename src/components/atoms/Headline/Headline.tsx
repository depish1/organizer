import React, { FunctionComponent } from 'react';
import { StyledHeadline } from './Headline.styles';

enum headlineSelectors {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
}

interface Props {
  text: string;
  size?: headlineSelectors;
}

const Headline: FunctionComponent<Props> = ({ text, size = 'h2' }) => {
  return <StyledHeadline>{text}</StyledHeadline>;
};

export default Headline;
