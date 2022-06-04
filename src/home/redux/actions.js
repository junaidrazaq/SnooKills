import * as constants from './constants';

export const updatePlayer = payload => async dispatch => {
  dispatch({
    type: constants.UPDATE_PLAYER.SUCCESS,
    payload,
  });
};

export const resetState = () => async dispatch => {
  dispatch({
    type: constants.RESET_STATE.SUCCESS,
  });
  alert('Game Reset!');
};
