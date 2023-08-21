import './App.css';
import FilterComponent from './components/FilterComponent/FilterComponent';
import TableComponent from './components/TableComponent/TableComponent';

function App() {
  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <FilterComponent />
        </div>
        <TableComponent />
      </div>
    </>
  );
}

export default App;
