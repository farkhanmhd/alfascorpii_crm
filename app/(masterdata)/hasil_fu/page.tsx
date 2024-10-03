import React from "react";
import MasterTable from "@/components/partials/table/MasterTable";
import hasilFuColumns from "@/components/partials/table/columns/HasilFUTableColumn";
import { hasilFU } from "@/constant/data";

const HasilFU = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Hasil FU"
        dataTable={hasilFU}
        dataColumns={hasilFuColumns}
        tableName="hasil_fu"
      />
    </div>
  );
};

export default HasilFU;
