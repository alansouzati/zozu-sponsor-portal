import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';

import { Grommet, Responsive } from 'grommet';

import zozu from './theme';

import Dashboard from './screens/Dashboard';
import ForgotPassword from './screens/ForgotPassword';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

import { changeDimension } from './actions/presentation';
import { initialize } from './actions/session';

import store from './store';
import history from './history';

store.dispatch(initialize(window.location.pathname));

const App = () => (
  <Grommet theme={zozu}>
    <Router history={history}>
      <Provider store={store}>
        <Responsive onChange={dimension => store.dispatch(changeDimension(dimension))}>
          <Switch>
            <Route exact={true} path='/' component={Dashboard} />
            <Route exact={true} path='/login' component={Login} />
            <Route exact={true} path='/sign-up' component={SignUp} />
            <Route exact={true} path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </Responsive>
      </Provider>
    </Router>
  </Grommet>
);

export default App;
