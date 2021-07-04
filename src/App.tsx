import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyles';
import SignIn from 'components/views/SignIn/SignIn';
import SignUp from 'components/views/SignUp/SignUp';
import Tasks from 'components/views/Tasks/Tasks';
import Header from 'components/organisms/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BackgroundWrapper } from './App.styles';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BackgroundWrapper>
          <Header />
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Tasks} />
          </Switch>
          <GlobalStyle />
        </BackgroundWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
