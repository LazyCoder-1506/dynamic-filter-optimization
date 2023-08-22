import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { updateSelectedOptions_8000 } from "./mod8000Slice";
import { updateSelectedOptions_20002 } from "./mod20002Slice";
import { getMod350Options } from "../../utils/getData";

interface InitialState {
  options: number[],
  selectedOptions: number[]
}

const initialState: InitialState = {
  options: [],
  selectedOptions: []
}

const mod350Slice = createSlice({
  name: 'mod_350',
  initialState,
  reducers: {
    updateSelectedOptions_350: (state, action: PayloadAction<number[]> ) => {
      state.selectedOptions = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSelectedOptions_8000, (state) => {
        if (state.selectedOptions.length === 0) {
          state.options = getMod350Options();
        }
      })
      .addCase(updateSelectedOptions_20002, (state) => {
        if (state.selectedOptions.length === 0) {
          state.options = getMod350Options();
        }
      })
  }
});

export const { updateSelectedOptions_350 } = mod350Slice.actions;

export default mod350Slice.reducer;