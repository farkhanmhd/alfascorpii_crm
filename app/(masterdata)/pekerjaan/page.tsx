import MasterTable from "@/components/partials/table/MasterTable";
import pekerjaanColumns from "@/components/partials/table/columns/PekerjaanTableColumn";
import { pekerjaan } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Pekerjaan" dataTable={pekerjaan} dataColumns={pekerjaanColumns} />
    </div>
  );
};

export default Pekerjaan;
