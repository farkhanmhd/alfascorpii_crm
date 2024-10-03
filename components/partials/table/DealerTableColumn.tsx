"use client";

import SimpleColumn from "./SimpleColumn";
import StatusColumn from "./StatusColumn";

const dealerColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Kode",
    accessor: "kode",
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

export default dealerColumns;
