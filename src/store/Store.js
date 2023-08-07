import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
