"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { useForm } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";

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
  const router = useRouter();
  const { register } = useForm();
  const [picker, setPicker] = useState(new Date());

  return (
    <Card title="Tambah Hari Besar">
      <form className="flex flex-col gap-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Textinput
              id="nama"
              label="Nama Hari Besar"
              placeholder="Hari Raya"
              register={register}
              className="h-[52px]"
            />
          </div>
          <div>
            <Textinput
              id="ucapan"
              label="Ucapan"
              placeholder="Selamat Hari Raya"
              register={register}
              className="h-[52px]"
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
              value={picker}
              id="hf-picker"
              className="form-control py-4"
              onChange={(date) => setPicker(date)}
              options={{
                dateFormat: "j F, Y",
              }}
            />
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
            text="Tambah"
            icon="heroicons-outline:plus"
          />
        </div>
      </form>
    </Card>
  );
};

export default Page;
