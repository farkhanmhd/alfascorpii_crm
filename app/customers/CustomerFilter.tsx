"use client";

import React, { useState } from "react";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import selectOptions from "./options";

export default function CustomerFilter() {
  const [tanggalAwal, setTanggalAwal] = useState(new Date());
  const [tanggalAkhir, setTanggalAkhir] = useState(new Date());
  return (
    <div className="grid grid-cols-1 place-content-end gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
      <DateInput label="Tanggal Awal" value={tanggalAwal} onChange={setTanggalAwal} />
      <DateInput label="Tanggal Akhir" value={tanggalAkhir} onChange={setTanggalAkhir} />

      {selectOptions.map((input, index) => (
        <SelectInput
          key={index}
          label={input.label}
          options={input.options}
          defaultValue={input.defaultValue}
        />
      ))}
    </div>
  );
}
