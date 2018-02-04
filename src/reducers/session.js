import { resourceReducer } from 'redux-resource';

export default resourceReducer('session', {
  initialState: {
    path: undefined,
  },
});
