import React from "react";
import MasterTable from "@/components/partials/table/MasterTable";
import keteranganFUColumns from "@/components/partials/table/columns/KeteranganFUTableColumn";
import { keteranganFU } from "@/constant/data";

const KeteranganFU = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Keterangan FU"
        dataTable={keteranganFU}
        dataColumns={keteranganFUColumns}
        tableName="keterangan_fu"
      />
    </div>
  );
};

export default KeteranganFU;
