"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Radio from "@/components/ui/Radio";
import { metodeFollowUp } from "@/constant/data";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { register } = useForm();
  const selectedMetode = metodeFollowUp.find((item) => item.id === Number(id));
  const [selectedStatus, setSelectedStatus] = useState(selectedMetode?.status);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <Card title="Edit Metode Follow Up">
      <form className="flex flex-col gap-y-8">
        <div>
          <Textinput
            id="name"
            label="Metode"
            placeholder="Telegram"
            register={register}
            className="mb-8 h-[52px]"
            defaultValue={selectedMetode?.metode}
          />
          <div className="flex flex-col gap-y-4">
            <p className="text-sm font-medium">Status</p>
            <div className="flex gap-x-8">
              <Radio
                id="show"
                label="SHOW"
                name="status"
                value="SHOW"
                activeClass="ring-success-500 border-success-500"
                onChange={handleStatusChange}
                checked={selectedStatus === "SHOW"}
              />
              <Radio
                id="hide"
                label="HIDE"
                name="status"
                value="HIDE"
                activeClass="ring-danger-500 border-danger-500"
                onChange={handleStatusChange}
                checked={selectedStatus === "HIDE"}
              />
            </div>
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
