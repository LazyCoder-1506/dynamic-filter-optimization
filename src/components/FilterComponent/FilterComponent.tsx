import { useState } from "react";
import Select from "react-select";
import { Option } from "../../utils/types";
import { getAllFilterOptions, getSelectedFilterOptions, getSelectedNumbersFromSelectedOptions } from "../../utils/filterOptions";
import { FilterProps } from "./FilterComponent.types";

const FilterComponent = ({ values, selectedValues, changeHandler, placeholderText }: FilterProps) => {
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
        placeholder={placeholderText}
      />
    </>
  );
}

export default FilterComponent;