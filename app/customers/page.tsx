import React from "react";
import CustomerTable from "@/components/partials/table/CustomerTable";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CustomerFilter from "./CustomerFilter";
import customerColumns from "@/components/partials/table/columns/CustomerColumn";
import { customers } from "@/constant/data";

const Page: React.FC = () => {
  return (
    <section>
      <Card>
        <div className="mb-6 flex flex-col gap-y-6">
          <div className="flex items-center justify-between">
            <h1 className="card-title mb-4 md:mb-0">Customers</h1>
            <Button
              icon="heroicons-outline:plus"
              text="Import Customers"
              className="btn-primary"
              link="/customers/add"
            />
          </div>
          <CustomerFilter />
          <Button
            icon="heroicons-outline:filter"
            text="Filter"
            className="btn-primary self-start"
          />
        </div>
        <CustomerTable dataColumns={customerColumns} dataTable={customers} />
      </Card>
    </section>
  );
};

export default Page;
