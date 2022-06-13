// import reduxThunk from 'redux-thunk';
// import { applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import homeSlice from '../home/redux/homeSlice';

import rootReducer from './reducers';

// const getMiddleware = () => {
//   const middleware = [reduxThunk];

//   return applyMiddleware(...middleware);
// };

// export default () => {
//   let store = createStore(rootReducer, getMiddleware());
//   return store;
// };

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
