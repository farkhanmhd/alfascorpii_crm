import React from "react";
import Card from "@/components/ui/Card";
import DropZone from "@/components/partials/froms/DropZone";
import Button from "@/components/ui/Button";

const ImportCustomer = () => {
  return (
    <div className="col-span-1 xl:col-span-2">
      <Card title="File upload">
        <div className="flex flex-col gap-y-8">
          <DropZone />
          <Button
            icon="heroicons-outline:cloud-arrow-up"
            text="Import"
            className="btn-primary self-end"
            link="/customers"
          />
        </div>
      </Card>
    </div>
  );
};

export default ImportCustomer;
