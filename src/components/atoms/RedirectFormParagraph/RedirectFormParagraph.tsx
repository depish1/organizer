import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { StyledRedirectFormParagraph } from './RedirectFormParagraph.styles.';

interface Props {
  paragraphText: string;
  linkText: string;
  linkPath: string;
}

const RedirectFormParagraph: FunctionComponent<Props> = ({ paragraphText, linkText, linkPath }) => {
  return (
    <StyledRedirectFormParagraph>
      <span>{paragraphText}</span>
      <Link to={linkPath}>{linkText}</Link>
    </StyledRedirectFormParagraph>
  );
};

export default RedirectFormParagraph;
