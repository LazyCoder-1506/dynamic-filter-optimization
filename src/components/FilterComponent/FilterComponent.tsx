import { useState } from "react";
import Select from "react-select";

interface Option {
  value: number,
  label: number
};

const options: readonly Option[] = [
  {
    value: 0,
    label: 0
  }, {
    value: 1,
    label: 1
  }, {
    value: 2,
    label: 2
  }, {
    value: 3,
    label: 3
  }
];

const FilterComponent = () => {
  const [selectedValues, setSelectedValues] = useState<readonly Option[]>([])

  const handleSelectChange = (selectedOptions: readonly Option[]): void => {
    setSelectedValues(selectedOptions);
  }

  return (
    <>
      <Select
        isMulti
        options={options}
        value={selectedValues}
        onChange={handleSelectChange}
      />
    </>
  );
}

export default FilterComponent;