import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  yellow: {
    lives: 3,
    kills: false,
    name: null,
    redsPotted: 0,
    colorsPotted: 0,
    notes: [],
  },
  green: {
    lives: 3,
    kills: false,
    name: null,
    redsPotted: 0,
    colorsPotted: 0,
    notes: [],
  },
  brown: {
    lives: 3,
    kills: false,
    name: null,
    redsPotted: 0,
    colorsPotted: 0,
    notes: [],
  },
  blue: {
    lives: 3,
    kills: false,
    name: null,
    redsPotted: 0,
    colorsPotted: 0,
    notes: [],
  },
  pink: {
    lives: 3,
    kills: false,
    name: null,
    redsPotted: 0,
    colorsPotted: 0,
    notes: [],
  },
  black: {
    lives: 3,
    kills: false,
    name: null,
    redsPotted: 0,
    colorsPotted: 0,
    notes: [],
  },
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // ** Add Life ** \\
    addLife: {
      reducer: (state, action) => {
        state[action.payload.player].lives += 1;
      },
    },

    // ** Minus Life ** \\
    minusLife: {
      reducer: (state, action) => {
        state[action.payload.player].lives -= 1;
        state[action.payload.player].kills = false;
      },
    },

    // ** Change Name ** \\
    changeName: {
      reducer: (state, action) => {
        state[action.payload.player].name = action.payload.name;
      },
    },

    // ** Add Note ** \\
    addNote: {
      reducer: (state, action) => {
        state[action.payload.player].notes.push(action.payload.note);
        if (action.payload.pottedBy) {
          state[action.payload.pottedBy].colorsPotted += 1;
        }
      },
    },

    // ** Remove Note ** \\
    removeNote: {
      reducer: (state, action) => {
        state[action.payload.player].notes.splice(action.payload.index, 1);
      },
    },

    // ** Toggle Kills ** \\
    toggleKills: {
      reducer: (state, action) => {
        state[action.payload.player].kills =
          !state[action.payload.player].kills;
      },
    },

    // ** Change Kills ** \\
    changeKills: {
      reducer: (state, action) => {
        state[action.payload.player].kills = action.payload.val;
      },
    },

    // ** Add Balls Potted ** \\
    addPotted: {
      reducer: (state, action) => {
        state[action.payload.player][action.payload.type] += 1;
      },
    },
    removePotted: {
      reducer: (state, action) => {
        state[action.payload.player][action.payload.type] -= 1;
      },
    },

    // ** Reset Lives ** \\
    resetGame: {
      reducer: () => initialState,
    },
  },
});

// ACTIONS
export const {
  addLife,
  minusLife,
  changeName,
  toggleKills,
  changeKills,
  addNote,
  removeNote,
  resetGame,
  addPotted,
  removePotted,
} = homeSlice.actions;

// SELECTORS
export const selectAllBalls = state => state.home;
export const selectBallByColor = createSelector(
  [selectAllBalls, (state, color) => color],
  (balls, color) => balls[color],
);

export default homeSlice.reducer;
