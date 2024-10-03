"use client";

import SimpleColumn from "./SimpleColumn";
import StatusColumn from "./StatusColumn";
import ActionColumn from "./ActionColumn";

const staffColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Username",
    accessor: "username",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Nama",
    accessor: "nama",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Nip",
    accessor: "nip",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "status",
    accessor: "status",
    Cell: (row) => {
      return (
        <StatusColumn
          statusValues={["Valid", "Suspend", "Resign"]}
          statusColors={[
            "text-success-500 bg-success-500",
            "text-warning-500 bg-warning-500",
            "text-danger-500 bg-danger-500",
          ]}
          row={row}
        />
      );
    },
  },
  {
    Header: "action",
    accessor: "action",
    Cell: () => {
      return <ActionColumn />;
    },
  },
];

export default staffColumns;
