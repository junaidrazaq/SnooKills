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
            payload.type === 'yellowLivesAdd' // ** Update Lives ** \\
              ? state.yellow.lives + 1
              : payload.type === 'yellowLivesMinus'
              ? state.yellow.lives - 1
              : state.yellow.lives,
          kills:
            payload.type === 'yellowKills' // ** Update Kills ** \\
              ? !state.yellow.kills
              : state.yellow.kills,
          name:
            payload.type === 'yellowName' // ** Update Name ** \\
              ? payload.name
              : state.yellow.name,
        },

        // ******* *|_Green_|* ------ \\
        green: {
          lives:
            payload.type === 'greenLivesAdd' // ** Update Lives ** \\
              ? state.green.lives + 1
              : payload.type === 'greenLivesMinus'
              ? state.green.lives - 1
              : state.green.lives,
          kills:
            payload.type === 'greenKills' // ** Update Kills ** \\
              ? !state.green.kills
              : state.green.kills,
          name:
            payload.type === 'greenName' // ** Update Name ** \\
              ? payload.name
              : state.green.name,
        },

        // ******* *|_Brown_|* ------ \\
        brown: {
          lives:
            payload.type === 'brownLivesAdd' // ** Update Lives ** \\
              ? state.brown.lives + 1
              : payload.type === 'brownLivesMinus'
              ? state.brown.lives - 1
              : state.brown.lives,
          kills:
            payload.type === 'brownKills' // ** Update Kills ** \\
              ? !state.brown.kills
              : state.brown.kills,
          name:
            payload.type === 'brownName' // ** Update Name ** \\
              ? payload.name
              : state.brown.name,
        },

        // ******* *|_Blue_|* ------ \\
        blue: {
          lives:
            payload.type === 'blueLivesAdd' // ** Update Lives ** \\
              ? state.blue.lives + 1
              : payload.type === 'blueLivesMinus'
              ? state.blue.lives - 1
              : state.blue.lives,
          kills:
            payload.type === 'blueKills' // ** Update Kills ** \\
              ? !state.blue.kills
              : state.blue.kills,
          name:
            payload.type === 'blueName' // ** Update Name ** \\
              ? payload.name
              : state.blue.name,
        },

        // ******* *|_Pink_|* ------ \\
        pink: {
          lives:
            payload.type === 'pinkLivesAdd' // ** Update Lives ** \\
              ? state.pink.lives + 1
              : payload.type === 'pinkLivesMinus'
              ? state.pink.lives - 1
              : state.pink.lives,
          kills:
            payload.type === 'pinkKills' // ** Update Kills ** \\
              ? !state.pink.kills
              : state.pink.kills,
          name:
            payload.type === 'pinkName' // ** Update Name ** \\
              ? payload.name
              : state.pink.name,
        },

        // ******* *|_Black_|* ------ \\
        black: {
          lives:
            payload.type === 'blackLivesAdd' // ** Update Lives ** \\
              ? state.black.lives + 1
              : payload.type === 'blackLivesMinus'
              ? state.black.lives - 1
              : state.black.lives,
          kills:
            payload.type === 'blackKills' // ** Update Kills ** \\
              ? !state.black.kills
              : state.black.kills,
          name:
            payload.type === 'blackName' // ** Update Name ** \\
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
