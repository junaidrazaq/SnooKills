import {combineReducers} from 'redux';

import LivesReducer from '../home/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Lives: LivesReducer,
});

export default rootReducer;
