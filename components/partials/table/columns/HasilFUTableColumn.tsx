"use client";

import SimpleColumn from "../SimpleColumn";
import StatusColumn from "../StatusColumn";
import ActionColumn from "../ActionColumn";

const hasilFuColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Minat",
    accessor: "minat",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Warna",
    accessor: "warna",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Hari",
    accessor: "hari",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (row) => {
      return (
        <StatusColumn
          statusValues={["SHOW", "HIDE"]}
          statusColors={["text-success-500 bg-success-500", "text-danger-500 bg-danger-500"]}
          row={row}
        />
      );
    },
  },
];

export default hasilFuColumns;
