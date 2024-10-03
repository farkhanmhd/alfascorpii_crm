import React from "react";
import MasterTable from "@/components/partials/table/MasterTable";
import kerabatColumns from "@/components/partials/table/KerabatTableColumn";
import { kerabat } from "@/constant/data";

const Kerabat = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Kerabat" dataTable={kerabat} dataColumns={kerabatColumns} />
    </div>
  );
};

export default Kerabat;
