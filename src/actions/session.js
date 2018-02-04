import { actionTypes } from 'redux-resource';

import { login as firebaseLogin } from '../api';

import history from '../history';

export const SESSION_SAVE_URL = 'SESSION_SAVE_URL';

export const initialize = path => (dispatch) => {
  const { token } = window.localStorage;
  if (!token && path !== '/login' && path !== '/sign-up' && path !== '/forgot-password') {
    dispatch({ type: SESSION_SAVE_URL, path });
    history.push('/login');
  }
};

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: actionTypes.CREATE_RESOURCES_PENDING,
    resourceName: 'session',
    request: 'login',
  });

  firebaseLogin(email, password)
    .then((result) => {
      console.log(result);
      dispatch({
        type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
        resourceName: 'session',
        request: 'login',
        resources: [{ id: email, email, password }],
      });
    })
    .catch(error => dispatch({
      type: actionTypes.CREATE_RESOURCES_FAILED,
      resourceName: 'session',
      request: 'login',
      error,
    }));
};

export default {
  initialize,
};
