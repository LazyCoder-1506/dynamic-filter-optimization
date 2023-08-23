import DataTable, { TableColumn } from "react-data-table-component";
import { useAppSelector } from "../../store/hooks";
import { DataRow } from "../../utils/types";

const TableComponent = () => {
  const data = useAppSelector(state => state.global.data)
  
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