import * as constants from './constants';

export const addLife = color => async dispatch => {
  dispatch({
    type: constants.ADD_LIVES.SUCCESS,
    payload: color,
  });
};

export const minusLife = color => async dispatch => {
  dispatch({
    type: constants.MINUS_LIVES.SUCCESS,
    payload: color,
  });
};

export const toggleKills = color => async dispatch => {
  dispatch({
    type: constants.TOGGLE_KILLS.SUCCESS,
    payload: color,
  });
};

export const resetState = () => async dispatch => {
  dispatch({
    type: constants.RESET_STATE.SUCCESS,
  });
  alert('Game Reset!');
};
