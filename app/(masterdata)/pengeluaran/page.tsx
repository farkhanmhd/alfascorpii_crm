import MasterTable from "@/components/partials/table/MasterTable";
import pengeluaranColumns from "@/components/partials/table/PengeluaranTableColumn";
import { pengeluaran } from "@/constant/data";

const Pekerjaan = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Pengeluaran" dataTable={pengeluaran} dataColumns={pengeluaranColumns} />
    </div>
  );
};

export default Pekerjaan;
