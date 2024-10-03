import React from "react";
import MasterTable from "@/components/partials/table/MasterTable";
import keteranganHasilColumns from "@/components/partials/table/KeteranganHasilTableColumn";
import { keteranganHasil } from "@/constant/data";

const KeteranganHasil = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Keterangan Hasil"
        dataTable={keteranganHasil}
        dataColumns={keteranganHasilColumns}
      />
    </div>
  );
};

export default KeteranganHasil;
