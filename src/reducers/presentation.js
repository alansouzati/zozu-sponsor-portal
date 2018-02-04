import { CHANGE_DIMENSION } from '../actions/presentation';

const initialState = {
  narrow: false,
};

const handlers = {
  [CHANGE_DIMENSION]: (state, action) => ({
    narrow: action.dimension === 'narrow',
  }),
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};
