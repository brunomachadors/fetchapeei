import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBreed: {
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
  },
};

export const breedSlice = createSlice({
  name: "breed",
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
