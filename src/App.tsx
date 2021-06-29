import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyles';
import SignIn from 'components/views/SignIn/SignIn';
import Header from 'components/organisms/Header/Header';

const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: repeating-linear-gradient(45deg, rgba(97, 97, 97, 0.1) 0px, rgba(97, 97, 97, 0.1) 2px, transparent 2px, transparent 4px),
    linear-gradient(90deg, rgb(11, 9, 10), rgb(11, 9, 10));
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
