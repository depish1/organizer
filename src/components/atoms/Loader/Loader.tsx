import React, { FunctionComponent } from 'react';
import { theme } from 'styles/theme';
import { StyledLoader, LoaderBackground } from './Loader.styles';

const Loader: FunctionComponent = () => (
  <LoaderBackground>
    <StyledLoader
      version="1.1"
      id="L6"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={250}
      width={250}
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <rect fill="none" stroke={theme.colors.special} strokeWidth="4" x="25" y="25" width="50" height="50">
        <animateTransform
          attributeName="transform"
          dur="0.5s"
          from="0 50 50"
          to="180 50 50"
          type="rotate"
          id="strokeBox"
          attributeType="XML"
          begin="rectBox.end"
        />
      </rect>
      <rect x="27" y="27" fill={theme.colors.special} width="46" height="50">
        <animate attributeName="height" dur="1.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze" begin="0s;strokeBox.end" />
      </rect>
    </StyledLoader>
  </LoaderBackground>
);
export default Loader;
