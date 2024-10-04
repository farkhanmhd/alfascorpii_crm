"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";

const Page = () => {
  const router = useRouter();
  const { register } = useForm();

  return (
    <Card title="Tambah Hasil Follow Up">
      <form className="flex flex-col gap-y-8">
        <div>
          <Textinput
            id="minat"
            label="Minat"
            placeholder="INTERESTED"
            register={register}
            className="h-[52px]"
          />
        </div>
        <div>
          <Textinput
            id="warna"
            label="Warna"
            placeholder="Gold"
            register={register}
            className="h-[52px]"
          />
        </div>
        <div>
          <Textinput
            id="hari"
            label="Hari"
            placeholder="8"
            register={register}
            className="h-[52px]"
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
            text="Tambah"
            icon="heroicons-outline:plus"
          />
        </div>
      </form>
    </Card>
  );
};

export default Page;
