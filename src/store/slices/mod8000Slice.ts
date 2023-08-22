import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
  options: number[],
  selectedOptions: number[]
}

const initialState: InitialState = {
  options: [],
  selectedOptions: []
}

const mod8000Slice = createSlice({
  name: 'mod8000',
  initialState,
  reducers: {
    updateSelectedOptions: (state, action: PayloadAction<number[]> ) => {
      state.selectedOptions = action.payload;
    }
  },
});

export const { updateSelectedOptions } = mod8000Slice.actions;

export default mod8000Slice.reducer;