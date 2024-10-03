"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Radio from "@/components/ui/Radio";

const Page = () => {
  const router = useRouter();
  const { register } = useForm();
  const [selectedStatus, setSelectedStatus] = useState("CONTACTED");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <Card title="Tambah Keterangan Hasil">
      <form className="flex flex-col gap-y-4">
        <div>
          <div className="mb-8">
            <p className="mb-2">Status FU</p>
            <div className="flex gap-x-8">
              <Radio
                id="contacted"
                label="CONTACTED"
                name="status"
                value="CONTACTED"
                activeClass="ring-success-500 border-success-500"
                onChange={handleStatusChange}
                checked={selectedStatus === "CONTACTED"}
              />
              <Radio
                id="not_contacted_status"
                label="NOT CONTACTED"
                name="status"
                value="NOT CONTACTED"
                activeClass="ring-danger-500 border-danger-500"
                onChange={handleStatusChange}
                checked={selectedStatus === "NOT CONTACTED"}
              />
            </div>
          </div>
          <Textinput
            id="keterangan"
            label="Keterangan"
            placeholder="Prospect"
            register={register}
            className="mb-8 h-[52px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-x-4 gap-y-16 sm:flex-row">
          <Button
            className="btn-outline-danger order-2 w-full sm:order-1 sm:w-min"
            icon="heroicons-outline:x-mark"
            text="Cancel"
            onClick={() => router.back()}
          />
          <Button
            type="submit"
            className="btn-primary w-full self-end sm:order-2 sm:w-max"
            text="Add Dealer"
            icon="heroicons-outline:plus"
          />
        </div>
      </form>
    </Card>
  );
};

export default Page;
