import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/output";
import { DataRow } from "../../components/TableComponent/TableComponent";
import { updateSelectedOptions_350 } from "./mod350Slice";
import { getFilteredData } from "../../utils/getData";
import { updateSelectedOptions_8000 } from "./mod8000Slice";
import { updateSelectedOptions_20002 } from "./mod20002Slice";

const initialState: { data: DataRow[] } = {
  data: data
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSelectedOptions_350, (state) => {
        state.data = getFilteredData();
      })
      .addCase(updateSelectedOptions_8000, (state) => {
        state.data = getFilteredData();
      })
      .addCase(updateSelectedOptions_20002, (state) => {
        state.data = getFilteredData();
      })
  }
});

export default dataSlice.reducer;