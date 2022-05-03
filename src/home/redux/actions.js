import * as constants from './constants';

export const addCount = () => async dispatch => {
  dispatch({type: constants.ADD_COUNT.SUCCESS});
};

export const minusCount = () => async dispatch => {
  dispatch({type: constants.MINUS_COUNT.SUCCESS});
};
