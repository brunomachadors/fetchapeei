import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFavourites } = favouritesSlice.actions;

const favouriteReducer = favouritesSlice.reducer;
export default favouriteReducer;
