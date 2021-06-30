import React, { FunctionComponent } from 'react';
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
      <a href={linkPath}>{linkText}</a>
    </StyledRedirectFormParagraph>
  );
};

export default RedirectFormParagraph;
