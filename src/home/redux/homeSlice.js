import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  yellow: {lives: 3, kills: false, name: null, notes: []},
  green: {lives: 3, kills: false, name: null, notes: []},
  brown: {lives: 3, kills: false, name: null, notes: []},
  blue: {lives: 3, kills: false, name: null, notes: []},
  pink: {lives: 3, kills: false, name: null, notes: []},
  black: {lives: 3, kills: false, name: null, notes: []},
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // ** Add Life ** \\
    addLife: {
      reducer: (state, action) => {
        console.log('state', state[action.payload.player]);
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
        console.log('action', action);
        state[action.payload.player].kills =
          !state[action.payload.player].kills;
      },
    },
  },
});

// ACTIONS
export const {
  addLife,
  minusLife,
  changeName,
  toggleKills,
  addNote,
  removeNote,
} = homeSlice.actions;

// SELECTORS
export const selectAllBalls = state => state.home;
export const selectBallByColor = createSelector(
  [selectAllBalls, (state, color) => color],
  (balls, color) => balls[color],
);

export default homeSlice.reducer;
