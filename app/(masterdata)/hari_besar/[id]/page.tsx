"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Radio from "@/components/ui/Radio";
import Select from "react-select";
import { hariBesar } from "@/constant/data";
import { dateObject } from "@/utils/stringFormatting";

const options = [
  { value: "BUDDHA", label: "BUDDHA" },
  { value: "HINDU", label: "HINDU" },
  { value: "ISLAM", label: "ISLAM" },
  { value: "KATOLIK", label: "KATOLIK" },
  { value: "KRISTEN PROTESTAN", label: "KRISTEN PROTESTAN" },
  { value: "KONGHUCU", label: "KONGHUCU" },
  { value: "LAIN-LAIN", label: "LAIN-LAIN" },
];

const styles = {
  option: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
  control: (provided) => ({
    ...provided,

    height: "52px",
    minHeight: "52px",
  }),
};

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { register } = useForm();
  const selectedHariBesar = hariBesar.find((item) => item.id === Number(id));
  const namaHariBesar = selectedHariBesar?.hariBesar;
  const [tanggal, setTanggal] = useState(dateObject(selectedHariBesar?.tanggal));
  console.log(selectedHariBesar?.tanggal, tanggal);
  const ucapan = selectedHariBesar?.ucapan;
  const [selectedStatus, setSelectedStatus] = useState(selectedHariBesar?.status);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <Card title="Edit Hari Besar">
      <form className="flex flex-col gap-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Textinput
              id="nama"
              label="Nama Hari Besar"
              placeholder="Hari Raya"
              register={register}
              className="h-[52px]"
              defaultValue={namaHariBesar}
            />
          </div>
          <div>
            <Textinput
              id="ucapan"
              label="Ucapan"
              placeholder="Selamat Hari Raya"
              register={register}
              className="h-[52px]"
              defaultValue={ucapan}
            />
          </div>
          <div className="w-full">
            <label htmlFor="status" className="form-label">
              Agama
            </label>
            <Select
              className="react-select w-full"
              classNamePrefix="select"
              defaultValue={options[0]}
              options={options}
              styles={styles}
              id="agama"
              name="agama"
            />
          </div>

          <div>
            <label className="form-label" htmlFor="default-picker">
              Tanggal
            </label>
            <Flatpickr
              value={tanggal}
              id="hf-picker"
              className="form-control py-4"
              onChange={(date) => setTanggal(date)}
              options={{
                dateFormat: "j F, Y",
              }}
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="text-sm font-medium">Status</p>
            <div className="flex gap-x-8">
              <Radio
                id="hold"
                label="HOLD"
                name="status"
                value="HOLD"
                activeClass="ring-danger-500 border-danger-500"
                onChange={handleStatusChange}
                checked={selectedStatus === "HOLD"}
              />
              <Radio
                id="aktif"
                label="AKTIF"
                name="status"
                value="AKTIF"
                activeClass="ring-success-500 border-success-500"
                onChange={handleStatusChange}
                checked={selectedStatus === "AKTIF"}
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
