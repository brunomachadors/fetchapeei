import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './breed/breed';
import pageReducer from './currentPage/currentPage';

export const store = configureStore({
  reducer: {
    breed: breedReducer,
    page: pageReducer,
  },
});
