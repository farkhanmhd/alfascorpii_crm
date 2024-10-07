"use client";

import SimpleColumn from "../SimpleColumn";
import StatusColumn from "../StatusColumn";

const customerColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Dealer",
    accessor: "dealer",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Customer",
    accessor: "customer",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Lokasi",
    accessor: "lokasi",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Telepon",
    accessor: "telepon",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Motor",
    accessor: "motor",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "FU",
    accessor: "fu",
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

export default customerColumns;
