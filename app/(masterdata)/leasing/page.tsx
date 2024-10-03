import MasterTable from "@/components/partials/table/MasterTable";
import leasingColumn from "@/components/partials/table/columns/LeasingTableColumn";
import { leasing } from "@/constant/data";

const Leasing = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Leasing" dataTable={leasing} dataColumns={leasingColumn} />
    </div>
  );
};

export default Leasing;
