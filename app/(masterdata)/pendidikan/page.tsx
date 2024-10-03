import MasterTable from "@/components/partials/table/MasterTable";
import pendidikanColumns from "@/components/partials/table/columns/PendidikanTableColumn";
import { pendidikan } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Pendidikan" dataTable={pendidikan} dataColumns={pendidikanColumns} />
    </div>
  );
};

export default Pekerjaan;
