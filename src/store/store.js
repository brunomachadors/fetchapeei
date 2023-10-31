import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './breed/breed';

export const store = configureStore({
  reducer: {
    breed: breedReducer,
  },
});
