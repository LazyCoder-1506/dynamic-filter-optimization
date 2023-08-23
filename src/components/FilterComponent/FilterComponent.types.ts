export interface FilterProps {
  values: string[],
  selectedValues: string[],
  changeHandler: (selectedValues: string[]) => void
  placeholderText: string
}