import MasterTable from "@/components/partials/table/MasterTable";
import metodeFollowUpColumns from "@/components/partials/table/columns/MetodeFollowUpColumn";
import { metodeFollowUp } from "@/constant/data";

const MetodeFU = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Metode Follow Up"
        dataTable={metodeFollowUp}
        dataColumns={metodeFollowUpColumns}
      />
    </div>
  );
};

export default MetodeFU;
