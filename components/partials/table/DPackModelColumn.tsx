"use client";

import SimpleColumn from "./SimpleColumn";
import StatusColumn from "./StatusColumn";

const dPackModelColumn = [
  {
    Header: "Kode",
    accessor: "id",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Model",
    accessor: "model",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Catalog",
    accessor: "catalog",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: (row) => {
      return <SimpleColumn value={row.cell.value} />;
    },
  },

  {
    Header: "Color",
    accessor: "color",
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

export default dPackModelColumn;
