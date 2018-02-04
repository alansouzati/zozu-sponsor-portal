import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import presentation from './reducers/presentation';
import session from './reducers/session';

export default compose(
  applyMiddleware(thunk)
)(createStore)(combineReducers({
  presentation,
  session,
}));
