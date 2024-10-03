"use client";

import SimpleColumn from "../SimpleColumn";
import StatusColumn from "../StatusColumn";
import ActionColumn from "../ActionColumn";
import { formatToRupiah } from "@/utils/stringFormatting";

const pengeluaranColumns = [
  {
    Header: "No",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Batas Bawah",
    accessor: "batas_bawah",
    Cell: (row) => {
      return <SimpleColumn value={formatToRupiah(row.cell.value)} />;
    },
  },
  {
    Header: "Batas Atas",
    accessor: "batas_atas",
    Cell: (row) => {
      console.log(row);
      return <SimpleColumn value={formatToRupiah(row.cell.value)} />;
    },
  },
  {
    Header: "Detail",
    accessor: "detail",
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

export default pengeluaranColumns;
