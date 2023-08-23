import { Option } from "./types";

export const getAllFilterOptions = (options: string[]): Option[] => {
  const filterOptions: Option[] = [];
  for (let i: number = 0 ; i < options.length ; i++) {
    filterOptions.push({ value: options[i], label: options[i] });
  }
  return filterOptions;
}

export const getSelectedFilterOptions = (selectedOptions: string[]): Option[] => {
  const selectedFilterOptions: Option[] = [];
  for (let i: number = 0 ; i < selectedOptions.length ; i++) {
    selectedFilterOptions.push({ value: selectedOptions[i], label: selectedOptions[i] });
  }
  return selectedFilterOptions;
}

export const getSelectedNumbersFromSelectedOptions = (selectedOptions: Option[]): string[] => {
  const selectedNumbers: string[] = [];
  for (let i: number = 0 ; i < selectedOptions.length ; i++) {
    selectedNumbers.push(selectedOptions[i].value);
  }
  return selectedNumbers;
}