"use client";

import SimpleColumn from "./SimpleColumn";
import StatusColumn from "./StatusColumn";
import ActionColumn from "./ActionColumn";

const hariBesarColumn = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Hari Besar",
    accessor: "hariBesar",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Tanggal",
    accessor: "tanggal",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Agama",
    accessor: "agama",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Ucapan",
    accessor: "ucapan",
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
          statusValues={["AKTIF", "HOLD"]}
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

export default hariBesarColumn;
