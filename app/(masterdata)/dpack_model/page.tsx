import MasterTable from "@/components/partials/table/MasterTable";
import dPackModelColumn from "@/components/partials/table/columns/DPackModelColumn";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <MasterTable
        title="DPACK Model"
        dataTable={[]}
        dataColumns={dPackModelColumn}
        tableName="dpack_model"
      />
    </div>
  );
};

export default Page;
