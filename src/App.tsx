import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyles';
import SignIn from 'components/views/SignIn/SignIn';
import SignUp from 'components/views/SignUp/SignUp';
import Tasks from 'components/views/Tasks/Tasks';
import Home from 'components/views/Home';
import NewTask from 'components/views/NewTask/NewTask';
import Nav from 'components/organisms/Nav/Nav';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RootState } from 'utils/store/store';
import { useSelector } from 'react-redux';
import { BackgroundWrapper, Container } from './App.styles';

const App: FunctionComponent = () => {
  const userId = useSelector(({ user }: RootState) => user.uid);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Container>
          {userId ? <HamburgerButton /> : null}
          {userId ? <Nav /> : null}
          <BackgroundWrapper>
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/newtask" component={NewTask} />
              <Route path="/tasks" component={Tasks} />

              <Route path="/" component={Home} />
            </Switch>
          </BackgroundWrapper>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
