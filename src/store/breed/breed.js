import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBreed: {
    weight: {
      imperial: '50 - 60',
      metric: '23 - 27',
    },
    height: {
      imperial: '25 - 27',
      metric: '64 - 69',
    },
    id: 2,
    name: 'Afghan Hound',
    country_code: 'AG',
    bred_for: 'Coursing and hunting',
    breed_group: 'Hound',
    life_span: '10 - 13 years',
    temperament: 'Aloof, Clownish, Dignified, Independent, Happy',
    origin: 'Afghanistan, Iran, Pakistan',
    reference_image_id: 'hMyT4CDXR',
  },
};

export const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    select: (state, action) => {
      state.selectedBreed = action.payload;
    },
    unselect: (state) => {
      state.selectedBreed = initialState.selectedBreed;
    },
  },
});

export const { select, unselect } = breedSlice.actions;

const breedReducer = breedSlice.reducer;
export default breedReducer;
