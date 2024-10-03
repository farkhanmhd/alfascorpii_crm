import MasterTable from "@/components/partials/table/MasterTable";
import penghasilanColumns from "@/components/partials/table/columns/PenghasilanTableColumn";
import { penghasilan } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Pengeluaran"
        dataTable={penghasilan}
        dataColumns={penghasilanColumns}
        tableName="penghasilan"
      />
    </div>
  );
};

export default Pekerjaan;
