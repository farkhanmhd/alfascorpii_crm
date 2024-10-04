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
    <Card title="Tambah Pengeluaran">
      <form className="flex flex-col gap-y-8">
        <div>
          <Textinput
            id="batas_bawah"
            label="Batas Bawah"
            placeholder="1000000"
            register={register}
            className="h-[52px]"
            type="text"
          />
        </div>
        <div>
          <Textinput
            id="batas_atas"
            label="Batas Atas"
            placeholder="10000000"
            register={register}
            className="h-[52px]"
          />
        </div>
        <div>
          <Textinput
            id="detail"
            label="Detail"
            placeholder="1jt - 10jt"
            register={register}
            className="h-[52px]"
          />
        </div>
        <div>
          <Textinput
            id="kode"
            label="Kode"
            placeholder="10D"
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
            text="Add Leasing"
            icon="heroicons-outline:plus"
          />
        </div>
      </form>
    </Card>
  );
};

export default Page;
