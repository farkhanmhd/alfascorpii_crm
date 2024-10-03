"use client";

import SimpleColumn from "../SimpleColumn";
import Tooltip from "@/components/ui/Tooltip";
import Icon from "@/components/ui/Icon";

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
  {
    Header: "Action",
    accessor: "action",
    Cell: () => {
      return (
        <div className="flex space-x-3 rtl:space-x-reverse">
          <Tooltip content="Delete" placement="top" arrow animation="shift-away" theme="danger">
            <button className="action-btn" type="button">
              <Icon icon="heroicons:trash" />
            </button>
          </Tooltip>
        </div>
      );
    },
  },
];

export default leasingColumn;
