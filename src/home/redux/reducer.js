import * as constants from './constants';

export const INITIAL_STATE = {
  yellow: {lives: 3, kills: false, name: null},
  green: {lives: 3, kills: false, name: null},
  brown: {lives: 3, kills: false, name: null},
  blue: {lives: 3, kills: false, name: null},
  pink: {lives: 3, kills: false, name: null},
  black: {lives: 3, kills: false, name: null},
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.UPDATE_PLAYER.SUCCESS: // ** Update Player State ** \\
      return {
        ...state,

        // ******* *|_Yellow_|* ------ \\
        yellow: {
          lives:
            payload === 'yellowLivesAdd' // ** Update Lives ** \\
              ? state.yellow.lives + 1
              : payload === 'yellowLivesMinus'
              ? state.yellow.lives - 1
              : state.yellow.lives,
          kills:
            payload === 'yellowKills' // ** Update Kills ** \\
              ? !state.yellow.kills
              : state.yellow.kills,
          name:
            payload === 'yellowName' // ** Update Name ** \\
              ? payload.name
              : state.yellow.name,
        },

        // ******* *|_Green_|* ------ \\
        green: {
          lives:
            payload === 'greenLivesAdd' // ** Update Lives ** \\
              ? state.green.lives + 1
              : payload === 'greenLivesMinus'
              ? state.green.lives - 1
              : state.green.lives,
          kills:
            payload === 'greenKills' // ** Update Kills ** \\
              ? !state.green.kills
              : state.green.kills,
          name:
            payload === 'greenName' // ** Update Name ** \\
              ? payload.name
              : state.green.name,
        },

        // ******* *|_Brown_|* ------ \\
        brown: {
          lives:
            payload === 'brownLivesAdd' // ** Update Lives ** \\
              ? state.brown.lives + 1
              : payload === 'brownLivesMinus'
              ? state.brown.lives - 1
              : state.brown.lives,
          kills:
            payload === 'brownKills' // ** Update Kills ** \\
              ? !state.brown.kills
              : state.brown.kills,
          name:
            payload === 'brownName' // ** Update Name ** \\
              ? payload.name
              : state.brown.name,
        },

        // ******* *|_Blue_|* ------ \\
        blue: {
          lives:
            payload === 'blueLivesAdd' // ** Update Lives ** \\
              ? state.blue.lives + 1
              : payload === 'blueLivesMinus'
              ? state.blue.lives - 1
              : state.blue.lives,
          kills:
            payload === 'blueKills' // ** Update Kills ** \\
              ? !state.blue.kills
              : state.blue.kills,
          name:
            payload === 'blueName' // ** Update Name ** \\
              ? payload.name
              : state.blue.name,
        },

        // ******* *|_Pink_|* ------ \\
        pink: {
          lives:
            payload === 'pinkLivesAdd' // ** Update Lives ** \\
              ? state.pink.lives + 1
              : payload === 'pinkLivesMinus'
              ? state.pink.lives - 1
              : state.pink.lives,
          kills:
            payload === 'pinkKills' // ** Update Kills ** \\
              ? !state.pink.kills
              : state.pink.kills,
          name:
            payload === 'pinkName' // ** Update Name ** \\
              ? payload.name
              : state.pink.name,
        },

        // ******* *|_Black_|* ------ \\
        black: {
          lives:
            payload === 'blackLivesAdd' // ** Update Lives ** \\
              ? state.black.lives + 1
              : payload === 'blackLivesMinus'
              ? state.black.lives - 1
              : state.black.lives,
          kills:
            payload === 'blackKills' // ** Update Kills ** \\
              ? !state.black.kills
              : state.black.kills,
          name:
            payload === 'blackName' // ** Update Name ** \\
              ? payload.name
              : state.black.name,
        },
      };

    case constants.RESET_STATE.SUCCESS: // Reset game
      return {
        ...state,
        yellow: {lives: 3, kills: false, name: ''},
        brown: {lives: 3, kills: false, name: ''},
        green: {lives: 3, kills: false, name: ''},
        blue: {lives: 3, kills: false, name: ''},
        pink: {lives: 3, kills: false, name: ''},
        black: {lives: 3, kills: false, name: ''},
      };

    default:
      return state;
  }
}
