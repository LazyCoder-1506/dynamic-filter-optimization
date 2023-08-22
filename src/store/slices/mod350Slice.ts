import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
  options: number[],
  selectedOptions: number[]
}

const initialState: InitialState = {
  options: [],
  selectedOptions: []
}

const mod350Slice = createSlice({
  name: 'mod350',
  initialState,
  reducers: {
    updateSelectedOptions: (state, action: PayloadAction<number[]> ) => {
      state.selectedOptions = action.payload;
    }
  },
});

export const { updateSelectedOptions } = mod350Slice.actions;

export default mod350Slice.reducer;