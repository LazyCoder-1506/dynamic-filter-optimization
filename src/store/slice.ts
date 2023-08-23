import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/output";
import { DataRow } from "../utils/types";

interface InitialState {
  data: DataRow[],
  mod_350: {
    values: number[],
    selectedValues: number[]
  }, 
  mod_8000: {
    values: number[],
    selectedValues: number[]
  }, 
  mod_20002: {
    values: number[],
    selectedValues: number[]
  }
}

const getUniqueFilterValues = (modValue: keyof DataRow): number[] => {
  const allData: DataRow[] = data;
  const values: number[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    if (!(values.includes(allData[i][modValue]))) values.push(allData[i][modValue]);
  }
  values.sort();
  return values;
}

const initialState: InitialState = {
  data: data,
  mod_350: {
    values: getUniqueFilterValues('mod_350'),
    selectedValues: []
  },
  mod_8000: {
    values: getUniqueFilterValues('mod_8000'),
    selectedValues: []
  },
  mod_20002: {
    values: getUniqueFilterValues('mod_20002'),
    selectedValues: []
  }
}

const globalSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    updateSelectedOptions_350: (state, action: PayloadAction<number[]> ) => {
      state.mod_350.selectedValues = action.payload;
      // update data
      const filteredData: DataRow[] = [];
      for (let i: number = 0 ; i < data.length ; i++) {
        const dataRow = data[i];
        if ((state.mod_350.selectedValues.length === 0 || state.mod_350.selectedValues.includes(dataRow.mod_350)) && (state.mod_8000.selectedValues.length === 0 || state.mod_8000.selectedValues.includes(dataRow.mod_8000)) && (state.mod_20002.selectedValues.length === 0 || state.mod_20002.selectedValues.includes(dataRow.mod_20002))) {
          filteredData.push(dataRow);
        }
      }
      state.data = filteredData;
      // update mod 8000 filters
      if (state.mod_8000.selectedValues.length === 0) {
        const values: number[] = [];
        for (let i: number = 0 ; i < state.data.length ; i++) {
          if (!(values.includes(state.data[i].mod_8000))) values.push(state.data[i].mod_8000);
        }
        values.sort();
        state.mod_8000.values = values;
      }
      // update mod 20002 filters
      if (state.mod_20002.selectedValues.length === 0) {
        const values: number[] = [];
        for (let i: number = 0 ; i < state.data.length ; i++) {
          if (!(values.includes(state.data[i].mod_20002))) values.push(state.data[i].mod_20002);
        }
        values.sort();
        state.mod_20002.values = values;
      }
    },
    updateSelectedOptions_8000: (state, action: PayloadAction<number[]> ) => {
      state.mod_8000.selectedValues = action.payload;
      // update data
      const filteredData: DataRow[] = [];
      for (let i: number = 0 ; i < data.length ; i++) {
        const dataRow = data[i];
        if ((state.mod_350.selectedValues.length === 0 || state.mod_350.selectedValues.includes(dataRow.mod_350)) && (state.mod_8000.selectedValues.length === 0 || state.mod_8000.selectedValues.includes(dataRow.mod_8000)) && (state.mod_20002.selectedValues.length === 0 || state.mod_20002.selectedValues.includes(dataRow.mod_20002))) {
          filteredData.push(dataRow);
        }
      }
      state.data = filteredData;
      // update mod 350 filters
      if (state.mod_350.selectedValues.length === 0) {
        const values: number[] = [];
        for (let i: number = 0 ; i < state.data.length ; i++) {
          if (!(values.includes(state.data[i].mod_350))) values.push(state.data[i].mod_350);
        }
        values.sort();
        state.mod_350.values = values;
      }
      // update mod 20002 filters
      if (state.mod_20002.selectedValues.length === 0) {
        const values: number[] = [];
        for (let i: number = 0 ; i < state.data.length ; i++) {
          if (!(values.includes(state.data[i].mod_20002))) values.push(state.data[i].mod_20002);
        }
        values.sort();
        state.mod_20002.values = values;
      }
    },
    updateSelectedOptions_20002: (state, action: PayloadAction<number[]> ) => {
      state.mod_20002.selectedValues = action.payload;
      // update data
      const filteredData: DataRow[] = [];
      for (let i: number = 0 ; i < data.length ; i++) {
        const dataRow = data[i];
        if ((state.mod_350.selectedValues.length === 0 || state.mod_350.selectedValues.includes(dataRow.mod_350)) && (state.mod_8000.selectedValues.length === 0 || state.mod_8000.selectedValues.includes(dataRow.mod_8000)) && (state.mod_20002.selectedValues.length === 0 || state.mod_20002.selectedValues.includes(dataRow.mod_20002))) {
          filteredData.push(dataRow);
        }
      }
      state.data = filteredData;
      // update mod 8000 filters
      if (state.mod_8000.selectedValues.length === 0) {
        const values: number[] = [];
        for (let i: number = 0 ; i < state.data.length ; i++) {
          if (!(values.includes(state.data[i].mod_8000))) values.push(state.data[i].mod_8000);
        }
        values.sort();
        state.mod_8000.values = values;
      }
      // update mod 350 filters
      if (state.mod_350.selectedValues.length === 0) {
        const values: number[] = [];
        for (let i: number = 0 ; i < state.data.length ; i++) {
          if (!(values.includes(state.data[i].mod_350))) values.push(state.data[i].mod_350);
        }
        values.sort();
        state.mod_350.values = values;
      }
    }
  }
});

export const { updateSelectedOptions_350, updateSelectedOptions_8000, updateSelectedOptions_20002 } = globalSlice.actions;

export default globalSlice.reducer;