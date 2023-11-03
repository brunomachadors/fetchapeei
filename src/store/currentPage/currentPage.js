import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    selectPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectPage } = pageSlice.actions;

const pageReducer = pageSlice.reducer;
export default pageReducer;
