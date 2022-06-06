import * as constants from './constants';

export const INITIAL_STATE = {
  yellow: {lives: 3, kills: false, name: null, notes: []},
  green: {lives: 3, kills: false, name: null, notes: []},
  brown: {lives: 3, kills: false, name: null, notes: []},
  blue: {lives: 3, kills: false, name: null, notes: []},
  pink: {lives: 3, kills: false, name: null, notes: []},
  black: {lives: 3, kills: false, name: null, notes: []},
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.UPDATE_PLAYER.SUCCESS:
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
              ? payload.kills
              : state.yellow.kills,
          name:
            payload.type === 'yellowName' // ** Update Name ** \\
              ? payload.name
              : state.yellow.name,
          notes:
            payload.type === 'yellowNotes' // ** Update Notes ** \\
              ? state.yellow.notes.length === 0
                ? [payload.notes]
                : [...state.yellow.notes, payload.notes]
              : state.yellow.notes,
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
              ? payload.kills
              : state.green.kills,
          name:
            payload.type === 'greenName' // ** Update Name ** \\
              ? payload.name
              : state.green.name,
          notes:
            payload.type === 'greenNotes' // ** Update Notes ** \\
              ? state.green.notes.length === 0
                ? [payload.notes]
                : [...state.green.notes, payload.notes]
              : state.green.notes,
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
              ? payload.kills
              : state.brown.kills,
          name:
            payload.type === 'brownName' // ** Update Name ** \\
              ? payload.name
              : state.brown.name,
          notes:
            payload.type === 'brownNotes' // ** Update Notes ** \\
              ? [...state.brown.notes, payload.notes]
              : state.brown.notes,
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
              ? payload.kills
              : state.blue.kills,
          name:
            payload.type === 'blueName' // ** Update Name ** \\
              ? payload.name
              : state.blue.name,
          notes:
            payload.type === 'blueNotes' // ** Update Notes ** \\
              ? [...state.blue.notes, payload.notes]
              : state.blue.notes,
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
              ? payload.kills
              : state.pink.kills,
          name:
            payload.type === 'pinkName' // ** Update Name ** \\
              ? payload.name
              : state.pink.name,

          notes:
            payload.type === 'pinkNotes' // ** Update Notes ** \\
              ? [...state.pink.notes, payload.notes]
              : state.pink.notes,
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
              ? payload.kills
              : state.black.kills,
          name:
            payload.type === 'blackName' // ** Update Name ** \\
              ? payload.name
              : state.black.name,
          notes:
            payload.type === 'blackNotes' // ** Update Notes ** \\
              ? [...state.black.notes, payload.notes]
              : state.black.notes,
        },
      };

    case constants.RESET_STATE.SUCCESS: // Reset game
      return {
        ...state,
        yellow: {lives: 3, kills: false, name: '', notes: []},
        brown: {lives: 3, kills: false, name: '', notes: []},
        green: {lives: 3, kills: false, name: '', notes: []},
        blue: {lives: 3, kills: false, name: '', notes: []},
        pink: {lives: 3, kills: false, name: '', notes: []},
        black: {lives: 3, kills: false, name: '', notes: []},
      };

    default:
      return state;
  }
}
