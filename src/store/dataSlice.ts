import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../assets/output";
import { DataRow } from "../components/TableComponent/TableComponent";

const initialState: { data: DataRow[] } = {
  data: data
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<DataRow[]>) => {
      state.data = action.payload;
    }
  }
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;