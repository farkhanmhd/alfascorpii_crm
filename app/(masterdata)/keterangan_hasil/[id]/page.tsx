"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Radio from "@/components/ui/Radio";
import { keteranganHasil } from "@/constant/data";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { register } = useForm();
  const selectedKeterangan = keteranganHasil.find((k) => k.id === Number(id));
  const [selectedStatus, setSelectedStatus] = useState(selectedKeterangan.status_fu);
  const [selectedTampil, setSelectedTampil] = useState(selectedKeterangan.status);

  const handleTampilChange = (e) => {
    setSelectedTampil(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <Card title="Edit Keterangan Hasil">
      <form className="flex flex-col gap-y-8">
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

          <p className="mb-2">Tampil</p>
          <div className="mb-8 flex gap-x-8">
            <Radio
              id="show"
              label="SHOW"
              name="tampil"
              value="SHOW"
              activeClass="ring-success-500 border-success-500"
              onChange={handleTampilChange}
              checked={selectedTampil === "SHOW"}
            />
            <Radio
              id="hide"
              label="HIDE"
              name="tampil"
              value="HIDE"
              activeClass="ring-danger-500 border-danger-500"
              onChange={handleTampilChange}
              checked={selectedTampil === "HIDE"}
            />
          </div>
          <Textinput
            id="keterangan"
            label="Keterangan"
            placeholder="Nomor Telepon Tidak Ada"
            register={register}
            className="mb-8 h-[52px]"
            defaultValue={selectedKeterangan.keterangan_hasil}
          />
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
