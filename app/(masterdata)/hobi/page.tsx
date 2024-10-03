import MasterTable from "@/components/partials/table/MasterTable";
import hobiColumns from "@/components/partials/table/columns/HobiTableColumn";
import { hobi } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Pendidikan" dataTable={hobi} dataColumns={hobiColumns} tableName="hobi" />
    </div>
  );
};

export default Pekerjaan;
