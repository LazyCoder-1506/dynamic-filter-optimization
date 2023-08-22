import { DataRow } from "../components/TableComponent/TableComponent";
import { data } from "../assets/output";
import store, { RootState } from "../store/store";

const state: RootState = store.getState();

export const getFilteredData = (): DataRow[] => {
  const filteredData: DataRow[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    const dataRow = data[i];
    if ((state.mod_350.selectedOptions.includes(dataRow.mod_350)) && (state.mod_8000.selectedOptions.includes(dataRow.mod_8000)) && (state.mod_20002.selectedOptions.includes(dataRow.mod_20002))) {
      filteredData.push(dataRow);
    }
  }
  return filteredData;
}

export const getMod350Options = (): number[] => {
  const options: number[] = [];
  const currentData: DataRow[] = state.data.data;
  for (let i: number = 0 ; i < currentData.length ; i++) {
    if (!(options.includes(currentData[i].mod_350))) options.push(currentData[i].mod_350);
  }
  options.sort();
  return options;
}

export const getMod8000Options = (): number[] => {
  const options: number[] = [];
  const currentData: DataRow[] = state.data.data;
  for (let i: number = 0 ; i < currentData.length ; i++) {
    if (!(options.includes(currentData[i].mod_8000))) options.push(currentData[i].mod_8000);
  }
  options.sort();
  return options;
}

export const getMod20002Options = (): number[] => {
  const options: number[] = [];
  const currentData: DataRow[] = state.data.data;
  for (let i: number = 0 ; i < currentData.length ; i++) {
    if (!(options.includes(currentData[i].mod_20002))) options.push(currentData[i].mod_20002);
  }
  options.sort();
  return options;
}