"use client";

import SimpleColumn from "../SimpleColumn";
import StatusColumn from "../StatusColumn";
import ActionColumn from "../ActionColumn";

const metodeFollowUpColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Metode",
    accessor: "metode",
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
  {
    Header: "Action",
    accessor: "action",
    Cell: () => {
      return <ActionColumn />;
    },
  },
];

export default metodeFollowUpColumns;
