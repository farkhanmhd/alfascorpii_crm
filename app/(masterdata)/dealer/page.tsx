import MasterTable from "@/components/partials/table/MasterTable";
import dealerColumns from "@/components/partials/table/columns/DealerTableColumn";
import { dealer } from "@/constant/data";

const Dealer = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Dealer" dataTable={dealer} dataColumns={dealerColumns} />
    </div>
  );
};

export default Dealer;
