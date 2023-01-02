import React, { useState } from "react";
import { TableControl } from "react-bootstrap-table-control";

export default function Table() {
  const [tableData, setTableData] = useState([]);
  const AddNewData = () => {
    setTableData([
      ...tableData,
      {
        id: tableData.length + 1,
        name: `Name${tableData.length + 1}`,
        description: `Description${tableData.length + 1}`,
      },
    ]);
  };

  return (
    <>
      <TableControl
        header={[
          { key: "id", name: "#" },
          { key: "name", name: "Name" },
          { key: "description", name: "Description" },
        ]}
        itens={tableData}
      />
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => AddNewData()}
      >
        Add
      </button>
    </>
  );
}
