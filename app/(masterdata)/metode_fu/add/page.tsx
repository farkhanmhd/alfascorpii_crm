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
  const [selectedStatus, setSelectedStatus] = useState("SHOW");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <Card title="Tambah Metode Follow Up">
      <form className="flex flex-col gap-y-8">
        <div>
          <Textinput
            id="name"
            label="Metode"
            placeholder="Telegram"
            register={register}
            className="mb-8 h-[52px]"
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
