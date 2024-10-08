import MasterTable from "@/components/partials/table/MasterTable";
import statusRumahColumns from "@/components/partials/table/columns/StatusRumahTableColumn";
import { statusRumah } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Status Rumah"
        dataTable={statusRumah}
        dataColumns={statusRumahColumns}
        tableName="status_rumah"
      />
    </div>
  );
};

export default Pekerjaan;
