import MasterTable from "@/components/partials/table/MasterTable";
import hariBesarColumn from "@/components/partials/table/columns/HariBesarColumn";
import { hariBesar } from "@/constant/data";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="Hari Besar"
        dataTable={hariBesar}
        dataColumns={hariBesarColumn}
        tableName="hari_besar"
      />
    </div>
  );
};

export default Page;
