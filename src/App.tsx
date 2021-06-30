import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyles';
import SignIn from 'components/views/SignIn/SignIn';
import SignUp from 'components/views/SignUp/SignUp';
import Header from 'components/organisms/Header/Header';
import { BackgroundWrapper } from './App.styles';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundWrapper>
        <Header />
        <SignIn />
        <SignUp />
        <GlobalStyle />
      </BackgroundWrapper>
    </ThemeProvider>
  );
};

export default App;
