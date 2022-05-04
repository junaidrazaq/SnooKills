import * as constants from './constants';

export const INITIAL_STATE = {
  yellowLives: 3,
  greenLives: 3,
  brownLives: 3,
  blueLives: 3,
  pinkLives: 3,
  blackLives: 3,
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.ADD_LIVES.SUCCESS:
      return {
        yellowLives:
          payload === 'yellow' ? state.yellowLives + 1 : state.yellowLives,
        greenLives:
          payload === 'green' ? state.greenLives + 1 : state.greenLives,
        brownLives:
          payload === 'brown' ? state.brownLives + 1 : state.brownLives,
        blueLives: payload === 'blue' ? state.blueLives + 1 : state.blueLives,
        pinkLives: payload === 'pink' ? state.pinkLives + 1 : state.pinkLives,
        blackLives:
          payload === 'black' ? state.blackLives + 1 : state.blackLives,
      };

    case constants.MINUS_LIVES.SUCCESS:
      return {
        yellowLives:
          payload === 'yellow' ? state.yellowLives - 1 : state.yellowLives,
        greenLives:
          payload === 'green' ? state.greenLives - 1 : state.greenLives,
        brownLives:
          payload === 'brown' ? state.brownLives - 1 : state.brownLives,
        blueLives: payload === 'blue' ? state.blueLives - 1 : state.blueLives,
        pinkLives: payload === 'pink' ? state.pinkLives - 1 : state.pinkLives,
        blackLives:
          payload === 'black' ? state.blackLives - 1 : state.blackLives,
      };

    default:
      return state;
  }
}
