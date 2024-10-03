import MasterTable from "@/components/partials/table/MasterTable";
import penghasilanColumns from "@/components/partials/table/PenghasilanTableColumn";
import { penghasilan } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Pengeluaran" dataTable={penghasilan} dataColumns={penghasilanColumns} />
    </div>
  );
};

export default Pekerjaan;
