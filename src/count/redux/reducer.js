import * as constants from './constants';

export const INITIAL_STATE = {
  count: 2,
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.ADD_COUNT.SUCCESS:
      return {
        ...state,
        count: state.count + 1,
      };

    case constants.MINUS_COUNT.SUCCESS:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
