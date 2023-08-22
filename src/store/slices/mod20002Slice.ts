import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
  options: number[],
  selectedOptions: number[]
}

const initialState: InitialState = {
  options: [],
  selectedOptions: []
}

const mod20002Slice = createSlice({
  name: 'mod20002',
  initialState,
  reducers: {
    updateSelectedOptions: (state, action: PayloadAction<number[]> ) => {
      state.selectedOptions = action.payload;
    }
  },
});

export const { updateSelectedOptions } = mod20002Slice.actions;

export default mod20002Slice.reducer;