import { useState } from "react";
import Select from "react-select";
import { Option } from "../../utils/types";
import { getAllFilterOptions, getSelectedFilterOptions, getSelectedNumbersFromSelectedOptions } from "../../utils/filterOptions";

interface FilterProps {
  values: number[],
  selectedValues: number[],
  changeHandler: (selectedValues: number[]) => void
}

const FilterComponent = ({ values, selectedValues, changeHandler }: FilterProps) => {
  const [selectedOptions, setSelectedOptions] = useState<readonly Option[]>(getSelectedFilterOptions(selectedValues))

  const handleSelectChange = (newSelectedOptions: readonly Option[]): void => {
    setSelectedOptions(newSelectedOptions);
    changeHandler(getSelectedNumbersFromSelectedOptions(newSelectedOptions as Option[]))
  }

  return (
    <>
      <Select
        isMulti
        options={getAllFilterOptions(values)}
        value={selectedOptions}
        onChange={handleSelectChange}
      />
    </>
  );
}

export default FilterComponent;