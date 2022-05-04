import * as constants from './constants';

export const INITIAL_STATE = {
  yellowLives: 3,
  greenLives: 3,
  brownLives: 3,
  blueLives: 3,
  pinkLives: 3,
  blackLives: 3,
  yellowKills: false,
  greenKills: false,
  brownKills: false,
  blueKills: false,
  pinkKills: false,
  blackKills: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.ADD_LIVES.SUCCESS:
      return {
        ...state,
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
        ...state,
        yellowLives:
          payload === 'yellow' ? state.yellowLives - 1 : state.yellowLives,
        yellowKills: payload === 'yellow' ? false : state.yellowKills,
        greenLives:
          payload === 'green' ? state.greenLives - 1 : state.greenLives,
        greenKills: payload === 'green' ? false : state.greenKills,
        brownLives:
          payload === 'brown' ? state.brownLives - 1 : state.brownLives,
        brownKills: payload === 'brown' ? false : state.brownKills,
        blueLives: payload === 'blue' ? state.blueLives - 1 : state.blueLives,
        blueKills: payload === 'blue' ? false : state.blueKills,
        pinkLives: payload === 'pink' ? state.pinkLives - 1 : state.pinkLives,
        pinkKills: payload === 'pink' ? false : state.pinkKills,
        blackLives:
          payload === 'black' ? state.blackLives - 1 : state.blackLives,
        blackKills: payload === 'black' ? false : state.blackKills,
      };

    case constants.TOGGLE_KILLS.SUCCESS:
      return {
        ...state,
        yellowKills:
          payload === 'yellow' ? !state.yellowKills : state.yellowKills,
        greenKills: payload === 'green' ? !state.greenKills : state.greenKills,
        brownKills: payload === 'brown' ? !state.brownKills : state.brownKills,
        blueKills: payload === 'blue' ? !state.blueKills : state.blueKills,
        pinkKills: payload === 'pink' ? !state.pinkKills : state.pinkKills,
        blackKills: payload === 'black' ? !state.blackKills : state.blackKills,
      };

    case constants.RESET_STATE.SUCCESS:
      return {
        ...state,
        yellowLives: 3,
        greenLives: 3,
        brownLives: 3,
        blueLives: 3,
        pinkLives: 3,
        blackLives: 3,
        yellowKills: false,
        greenKills: false,
        brownKills: false,
        blueKills: false,
        pinkKills: false,
        blackKills: false,
      };

    default:
      return state;
  }
}
