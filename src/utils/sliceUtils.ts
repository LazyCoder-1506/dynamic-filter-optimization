import { DataRow } from "./types";

export const filterData = (data: DataRow[], mod350SelectedValues: string[], mod8000SelectedValues: string[], mod20002SelectedValues: string[]): DataRow[] => {
  const filteredData: DataRow[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    const dataRow = data[i];
    if ((mod350SelectedValues.length === 0 || mod350SelectedValues.includes(dataRow.mod350)) && (mod8000SelectedValues.length === 0 || mod8000SelectedValues.includes(dataRow.mod8000)) && (mod20002SelectedValues.length === 0 || mod20002SelectedValues.includes(dataRow.mod20002))) {
      filteredData.push(dataRow);
    }
  }
  return filteredData;
}

export const updateMod350Filters = (data: DataRow[]): string[] => {
  const values: string[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    if (!(values.includes(data[i].mod350))) values.push(data[i].mod350);
  }
  values.sort((a, b) => (parseInt(a) - parseInt(b)));
  return values;
}

export const updateMod8000Filters = (data: DataRow[]): string[] => {
  const values: string[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    if (!(values.includes(data[i].mod8000))) values.push(data[i].mod8000);
  }
  values.sort((a, b) => (parseInt(a) - parseInt(b)));
  return values;
}

export const updateMod20002Filters = (data: DataRow[]): string[] => {
  const values: string[] = [];
  for (let i: number = 0 ; i < data.length ; i++) {
    if (!(values.includes(data[i].mod20002))) values.push(data[i].mod20002);
  }
  values.sort((a, b) => (parseInt(a) - parseInt(b)));
  return values;
}