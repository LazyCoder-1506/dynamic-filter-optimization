import DataTable, { TableColumn } from "react-data-table-component";
import { useAppSelector } from "../../store/hooks";
// import { data } from "../../assets/output";

export interface DataRow {
  value: number,
  mod_350: number,
  mod_8000: number,
  mod_20002: number
};

const TableComponent = () => {
  const data = useAppSelector(state => state.data.data)
  
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Value',
      selector: row => row.value,
    }, {
      name: 'Mod 350',
      selector: row => row.mod_350,
    }, {
      name: 'Mod 8000',
      selector: row => row.mod_8000,
    }, {
      name: 'Mod 20002',
      selector: row => row.mod_20002,
    }
  ]

  return (
    <>
      <div className="h-[672px] overflow-y-auto">
        <DataTable
          columns={columns}
          data={data}
          dense
          highlightOnHover
          pagination
          paginationPerPage={100}
          paginationRowsPerPageOptions={[100]}

        />
      </div>
    </>
  );


}

export default TableComponent;