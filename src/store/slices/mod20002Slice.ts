import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { updateSelectedOptions_350 } from "./mod350Slice";
import { updateSelectedOptions_8000 } from "./mod8000Slice";
import { getMod20002Options } from "../../utils/getData";

interface InitialState {
  options: number[],
  selectedOptions: number[]
}

const initialState: InitialState = {
  options: [],
  selectedOptions: []
}

const mod20002Slice = createSlice({
  name: 'mod_20002',
  initialState,
  reducers: {
    updateSelectedOptions_20002: (state, action: PayloadAction<number[]> ) => {
      state.selectedOptions = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSelectedOptions_350, (state) => {
        if (state.selectedOptions.length === 0) {
          state.options = getMod20002Options();
        }
      })
      .addCase(updateSelectedOptions_8000, (state) => {
        if (state.selectedOptions.length === 0) {
          state.options = getMod20002Options();
        }
      })
  }
});

export const { updateSelectedOptions_20002 } = mod20002Slice.actions;

export default mod20002Slice.reducer;