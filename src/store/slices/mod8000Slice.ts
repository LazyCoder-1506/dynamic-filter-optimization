import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { updateSelectedOptions_350 } from "./mod350Slice";
import { getMod8000Options } from "../../utils/getData";
import { updateSelectedOptions_20002 } from "./mod20002Slice";

interface InitialState {
  options: number[],
  selectedOptions: number[]
}

const initialState: InitialState = {
  options: [],
  selectedOptions: []
}

const mod8000Slice = createSlice({
  name: 'mod_8000',
  initialState,
  reducers: {
    updateSelectedOptions_8000: (state, action: PayloadAction<number[]> ) => {
      state.selectedOptions = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSelectedOptions_350, (state) => {
        if (state.selectedOptions.length === 0) {
          state.options = getMod8000Options();
        }
      })
      .addCase(updateSelectedOptions_20002, (state) => {
        if (state.selectedOptions.length === 0) {
          state.options = getMod8000Options();
        }
      })
  }
});

export const { updateSelectedOptions_8000 } = mod8000Slice.actions;

export default mod8000Slice.reducer;