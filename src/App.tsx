import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyles';
import SignIn from 'components/views/SignIn/SignIn';
import Header from 'components/organisms/Header/Header';

const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: repeating-radial-gradient(
      circle at center center,
      transparent 0px,
      transparent 13px,
      rgba(255, 255, 255, 0.05) 13px,
      rgba(255, 255, 255, 0.05) 26px,
      transparent 26px,
      transparent 27px,
      rgba(255, 255, 255, 0.05) 27px,
      rgba(255, 255, 255, 0.05) 32px,
      transparent 32px,
      transparent 34px,
      rgba(255, 255, 255, 0.05) 34px,
      rgba(255, 255, 255, 0.05) 36px
    ),
    repeating-radial-gradient(
      circle at center center,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 1px,
      rgb(0, 0, 0) 1px,
      rgb(0, 0, 0) 13px,
      rgb(0, 0, 0) 13px,
      rgb(0, 0, 0) 24px,
      rgb(0, 0, 0) 24px,
      rgb(0, 0, 0) 37px,
      rgb(0, 0, 0) 37px,
      rgb(0, 0, 0) 44px,
      rgb(0, 0, 0) 44px,
      rgb(0, 0, 0) 48px
    );
  background-size: 88px 88px;
`;

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundWrapper>
        <Header />
        <SignIn />
        <GlobalStyle />
      </BackgroundWrapper>
    </ThemeProvider>
  );
};

export default App;
