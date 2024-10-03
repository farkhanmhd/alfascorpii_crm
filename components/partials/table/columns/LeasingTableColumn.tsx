"use client";

import SimpleColumn from "../SimpleColumn";

const leasingColumn = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Leasing",
    accessor: "leasing",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
];

export default leasingColumn;
