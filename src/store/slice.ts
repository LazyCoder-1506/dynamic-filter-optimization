import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/output";
import { DataRow } from "../utils/types";
import { filterData, updateMod20002Filters, updateMod350Filters, updateMod8000Filters } from "../utils/dataUtils";

interface InitialState {
  data: DataRow[],
  mod_350: {
    values: string[],
    selectedValues: string[]
  }, 
  mod_8000: {
    values: string[],
    selectedValues: string[]
  }, 
  mod_20002: {
    values: string[],
    selectedValues: string[]
  }
}

const getUniqueFilterValues = (modValue: keyof DataRow): string[] => {
  const allData: DataRow[] = data;
  const values: string[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    if (!(values.includes(allData[i][modValue]))) values.push(allData[i][modValue]);
  }
  values.sort((a, b) => (parseInt(a) - parseInt(b)));
  return values;
}

const initialState: InitialState = {
  data: data,
  mod_350: {
    values: getUniqueFilterValues('mod350'),
    selectedValues: []
  },
  mod_8000: {
    values: getUniqueFilterValues('mod8000'),
    selectedValues: []
  },
  mod_20002: {
    values: getUniqueFilterValues('mod20002'),
    selectedValues: []
  }
}

const globalSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    updateSelectedOptions_350: (state, action: PayloadAction<string[]> ) => {
      state.mod_350.selectedValues = action.payload;
      // update data
      state.data = filterData(data, state.mod_350.selectedValues, state.mod_8000.selectedValues, state.mod_20002.selectedValues);
      // update mod 8000 filters
      if (state.mod_8000.selectedValues.length === 0) {
        state.mod_8000.values = updateMod8000Filters(state.data);
      }
      // update mod 20002 filters
      if (state.mod_20002.selectedValues.length === 0) {
        state.mod_20002.values = updateMod20002Filters(state.data);
      }
    },
    updateSelectedOptions_8000: (state, action: PayloadAction<string[]> ) => {
      state.mod_8000.selectedValues = action.payload;
      // update data
      state.data = filterData(data, state.mod_350.selectedValues, state.mod_8000.selectedValues, state.mod_20002.selectedValues);
      // update mod 350 filters
      if (state.mod_350.selectedValues.length === 0) {
        state.mod_350.values = updateMod350Filters(state.data);
      }
      // update mod 20002 filters
      if (state.mod_20002.selectedValues.length === 0) {
        state.mod_20002.values = updateMod20002Filters(state.data);
      }
    },
    updateSelectedOptions_20002: (state, action: PayloadAction<string[]> ) => {
      state.mod_20002.selectedValues = action.payload;
      // update data
      state.data = filterData(data, state.mod_350.selectedValues, state.mod_8000.selectedValues, state.mod_20002.selectedValues);
      // update mod 8000 filters
      if (state.mod_8000.selectedValues.length === 0) {
        state.mod_8000.values = updateMod8000Filters(state.data);
      }
      // update mod 350 filters
      if (state.mod_350.selectedValues.length === 0) {
        state.mod_350.values = updateMod350Filters(state.data);
      }
    }
  }
});

export const { updateSelectedOptions_350, updateSelectedOptions_8000, updateSelectedOptions_20002 } = globalSlice.actions;

export default globalSlice.reducer;