import DPackModelTable from "@/components/partials/table/DPackModelTable";
import dPackModelColumn from "@/components/partials/table/columns/DPackModelColumn";
import { dpackModel } from "@/constant/data";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <DPackModelTable
        title="DPACK Model"
        dataTable={dpackModel}
        dataColumns={dPackModelColumn}
        tableName="dpack_model"
      />
    </div>
  );
};

export default Page;
