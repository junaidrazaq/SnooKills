import {configureStore} from '@reduxjs/toolkit';
import homeSlice from '../home/redux/homeSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
