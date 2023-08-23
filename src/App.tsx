import './App.css';
import FilterComponent from './components/FilterComponent/FilterComponent';
import TableComponent from './components/TableComponent/TableComponent';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { updateSelectedOptions_20002 } from './store/slice';
import { updateSelectedOptions_350 } from './store/slice';
import { updateSelectedOptions_8000 } from './store/slice';

function App() {
  const dispatch = useAppDispatch()
  // mod 350 filter
  const mod350Filters = useAppSelector(state => state.global.mod_350.values);
  const mod350SelectedFilters = useAppSelector(state => state.global.mod_350.selectedValues);
  const mod350ChangeHandler = (selectedValues: string[]): void => {
    dispatch(updateSelectedOptions_350(selectedValues));
  }
  // mod 8000 filter
  const mod8000Filters = useAppSelector(state => state.global.mod_8000.values);
  const mod8000SelectedFilters = useAppSelector(state => state.global.mod_8000.selectedValues);
  const mod8000ChangeHandler = (selectedValues: string[]): void => {
    dispatch(updateSelectedOptions_8000(selectedValues));
  }
  // mod 20002 filter
  const mod20002Filters = useAppSelector(state => state.global.mod_20002.values);
  const mod20002SelectedFilters = useAppSelector(state => state.global.mod_20002.selectedValues);
  const mod20002ChangeHandler = (selectedValues: string[]): void => {
    dispatch(updateSelectedOptions_20002(selectedValues));
  }

  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <FilterComponent values={mod350Filters} selectedValues={mod350SelectedFilters} changeHandler={mod350ChangeHandler} placeholderText="Mod 350" />
          <FilterComponent values={mod8000Filters} selectedValues={mod8000SelectedFilters} changeHandler={mod8000ChangeHandler} placeholderText="Mod 8000" />
          <FilterComponent values={mod20002Filters} selectedValues={mod20002SelectedFilters} changeHandler={mod20002ChangeHandler} placeholderText="Mod 20002" />
        </div>
        <TableComponent />
      </div>
    </>
  );
}

export default App;
