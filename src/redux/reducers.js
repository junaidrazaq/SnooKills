import {combineReducers} from 'redux';

import CountReducer from '../home/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Count: CountReducer,
});

export default rootReducer;
