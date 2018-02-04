export const CHANGE_DIMENSION = 'CHANGE_DIMENSION';

export const changeDimension = dimension => dispatch => dispatch({
  type: CHANGE_DIMENSION,
  dimension,
});

export default {
  CHANGE_DIMENSION,
  changeDimension,
};
