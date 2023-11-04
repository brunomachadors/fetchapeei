import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './breed/breed';
import pageReducer from './currentPage/currentPage';
import favouriteReducer from './favourites/favourites';

export const store = configureStore({
  reducer: {
    breed: breedReducer,
    page: pageReducer,
    favourites: favouriteReducer,
  },
});
