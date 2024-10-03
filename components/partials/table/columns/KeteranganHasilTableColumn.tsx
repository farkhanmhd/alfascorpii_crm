"use client";

import SimpleColumn from "../SimpleColumn";
import StatusColumn from "../StatusColumn";
import ActionColumn from "../ActionColumn";

const keteranganHasilColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Keterangan Hasil",
    accessor: "keterangan_hasil",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Status FU",
    accessor: "status_fu",
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

export default keteranganHasilColumns;
