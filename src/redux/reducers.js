import {combineReducers} from 'redux';

import CountReducer from '../count/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Count: CountReducer,
});

export default rootReducer;
