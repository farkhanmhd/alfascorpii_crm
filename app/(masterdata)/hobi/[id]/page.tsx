"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Radio from "@/components/ui/Radio";
import { hobi } from "@/constant/data";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { register } = useForm();

  const selectedHobi = hobi.find((hobi) => hobi.id === Number(id));
  const [selectedStatus, setSelectedStatus] = useState(selectedHobi.status);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <Card title="Edit Hobi">
      <form className="flex flex-col gap-y-8">
        <div>
          <Textinput
            id="hobi"
            label="Hobi"
            placeholder="ESPORT"
            register={register}
            className="mb-4 h-[52px]"
            defaultValue={selectedHobi?.hobi}
          />
        </div>
        <div>
          <p className="font-semi mb-2 text-sm">Status</p>
          <div className="flex gap-x-8">
            <Radio
              id="contacted"
              label="SHOW"
              name="status"
              value="SHOW"
              activeClass="ring-success-500 border-success-500"
              onChange={handleStatusChange}
              checked={selectedStatus === "SHOW"}
            />
            <Radio
              id="not_contacted_status"
              label="HIDE"
              name="status"
              value="HIDE"
              activeClass="ring-danger-500 border-danger-500"
              onChange={handleStatusChange}
              checked={selectedStatus === "HIDE"}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-x-4 gap-y-16 sm:flex-row">
          <Button
            className="btn-danger order-2 w-full sm:order-1 sm:w-min"
            text="Hapus"
            icon="heroicons-outline:trash"
          />
          <div className="order-1 flex flex-col gap-4 sm:order-2 sm:flex-row">
            <Button
              className="btn-outline-danger order-2 w-full sm:order-1 sm:w-min"
              icon="heroicons-outline:x-mark"
              text="Cancel"
              onClick={() => router.back()}
            />
            <Button
              type="submit"
              className="btn-primary order-1 w-full sm:order-2 sm:w-min"
              icon="heroicons-outline:check"
              text="Simpan"
            />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Page;
