import {combineReducers} from 'redux';

import PlayersReducer from '../home/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Players: PlayersReducer,
});

export default rootReducer;
