import * as constants from './constants';

export const INITIAL_STATE = {
  yellow: {lives: 3, kills: false},
  green: {lives: 3, kills: false},
  brown: {lives: 3, kills: false},
  blue: {lives: 3, kills: false},
  pink: {lives: 3, kills: false},
  black: {lives: 3, kills: false},
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.UPDATE_PLAYER.SUCCESS: // ** Update Player State ** \\
      return {
        ...state,
        yellow: {
          lives:
            payload === 'yellowLivesAdd'
              ? state.yellow.lives + 1
              : payload === 'yellowLivesMinus'
              ? state.yellow.lives - 1
              : state.yellow.lives,
          kills:
            payload === 'yellowKills'
              ? !state.yellow.kills
              : state.yellow.kills,
        },
        green: {
          lives:
            payload === 'greenLivesAdd'
              ? state.green.lives + 1
              : payload === 'greenLivesMinus'
              ? state.green.lives - 1
              : state.green.lives,
          kills:
            payload === 'greenKills' ? !state.green.kills : state.green.kills,
        },
        brown: {
          lives:
            payload === 'brownLivesAdd'
              ? state.brown.lives + 1
              : payload === 'brownLivesMinus'
              ? state.brown.lives - 1
              : state.brown.lives,
          kills:
            payload === 'brownKills' ? !state.brown.kills : state.brown.kills,
        },
        blue: {
          lives:
            payload === 'blueLivesAdd'
              ? state.blue.lives + 1
              : payload === 'blueLivesMinus'
              ? state.blue.lives - 1
              : state.blue.lives,
          kills: payload === 'blueKills' ? !state.blue.kills : state.blue.kills,
        },
        pink: {
          lives:
            payload === 'pinkLivesAdd'
              ? state.pink.lives + 1
              : payload === 'pinkLivesMinus'
              ? state.pink.lives - 1
              : state.pink.lives,
          kills: payload === 'pinkKills' ? !state.pink.kills : state.pink.kills,
        },
        black: {
          lives:
            payload === 'blackLivesAdd'
              ? state.black.lives + 1
              : payload === 'blackLivesMinus'
              ? state.blackLives - 1
              : state.black.lives,
          kills:
            payload === 'blackKills' ? !state.black.kills : state.black.kills,
        },
      };

    case constants.RESET_STATE.SUCCESS: // Reset game
      return {
        ...state,
        yellow: {lives: 3, kills: false},
        green: {lives: 3, kills: false},
        brown: {lives: 3, kills: false},
        blue: {lives: 3, kills: false},
        pink: {lives: 3, kills: false},
        black: {lives: 3, kills: false},
      };

    default:
      return state;
  }
}
