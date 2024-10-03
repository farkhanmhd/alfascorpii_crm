import MasterTable from "@/components/partials/table/MasterTable";
import staffColumns from "@/components/partials/table/columns/StaffTableColumn";
import { staff } from "@/constant/data";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable title="Staff" dataTable={staff} dataColumns={staffColumns} />
    </div>
  );
};

export default Page;
