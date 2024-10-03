"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Checkbox from "@/components/ui/Checkbox";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import { staff } from "@/constant/data";
import Select from "react-select";
import { wewenangAceh, wewenangMedan, wewenangPekanBaru, wewenangeKepRiau } from "@/constant/data";

// Define the input field configurations in an array
const inputFields = [
  { id: "username", label: "Username", placeholder: "johndoe" },
  { id: "nama", label: "Nama", placeholder: "John Doe" },
  { id: "telepon", label: "Telepon", placeholder: "081234567890" },
  { id: "nip", label: "NIP", placeholder: "12345678" },
];

const status = [
  { value: "valid", label: "Valid" },
  { value: "suspend", label: "Suspend" },
  { value: "resign", label: "Resign" },
  { value: "hapus", label: "Hapus" },
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

const wewenangArray = [
  { name: "aceh", data: wewenangAceh },
  { name: "medan", data: wewenangMedan },
  { name: "pekanbaru", data: wewenangPekanBaru },
  { name: "kepRiau", data: wewenangeKepRiau },
];

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { register } = useForm();
  const selectedStaff = staff.find((staff) => staff.id === Number(id));

  const [checkboxState, setCheckboxState] = useState({
    aceh: {},
    medan: {},
    pekanbaru: {},
    kepRiau: {},
  });
  const [checkAllState, setCheckAllState] = useState({
    aceh: false,
    medan: false,
    pekanbaru: false,
    kepRiau: false,
  });

  const handleCheckboxChange = (region, label) => {
    setCheckboxState((prev) => ({
      ...prev,
      [region]: {
        ...prev[region],
        [label]: !prev[region][label],
      },
    }));
  };

  const handleCheckAllChange = (region) => {
    // Find the region data in the wewenangArray
    const regionData = wewenangArray.find((item) => item.name === region);

    if (!regionData) {
      return; // Exit if the region is not found
    }

    const isChecked = !checkAllState[region];

    // Update the check all state for the region
    setCheckAllState((prev) => ({
      ...prev,
      [region]: isChecked,
    }));

    // Update the checkbox state for all wewenang in the region
    setCheckboxState((prev) => ({
      ...prev,
      [region]: Object.fromEntries(
        regionData.data.map((wewenang) => [wewenang.nama, isChecked]), // Use 'nama' as the key
      ),
    }));
  };

  const renderCheckboxes = (region) => {
    // Find the region data in the wewenangArray
    const regionData = wewenangArray.find((item) => item.name === region);

    if (!regionData) {
      return null; // Return null if the region is not found
    }

    return (
      <div className="space-xy-6 flex flex-col">
        {regionData.data.map((item) => (
          <Checkbox
            key={item.id} // Assuming each item has a unique id
            label={item.nama} // Assuming 'nama' is the label
            value={checkboxState[region][item.nama]} // Use 'nama' as key for state
            activeClass="ring-primary-500 bg-primary-500"
            onChange={() => handleCheckboxChange(region, item.nama)}
          />
        ))}
      </div>
    );
  };

  const [wewenangMenuState, setWewenangMenuState] = useState({
    importExcel: false,
    staff: false,
    masterData: false,
    deleteFUTerakhir: false,
    deleteDeal: false,
    deleteUpdate: false,
    report: false,
  });

  const wewenangMenuOptions = [
    {
      label: "Import Excel",
      value: wewenangMenuState.importExcel,
      onChange: () => setWewenangMenuState((prev) => ({ ...prev, importExcel: !prev.importExcel })),
    },
    {
      label: "Staff",
      value: wewenangMenuState.staff,
      onChange: () => setWewenangMenuState((prev) => ({ ...prev, staff: !prev.staff })),
    },
    {
      label: "Master Data",
      value: wewenangMenuState.masterData,
      onChange: () => setWewenangMenuState((prev) => ({ ...prev, masterData: !prev.masterData })),
    },
    {
      label: "Delete FU Terakhir",
      value: wewenangMenuState.deleteFUTerakhir,
      onChange: () =>
        setWewenangMenuState((prev) => ({ ...prev, deleteFUTerakhir: !prev.deleteFUTerakhir })),
    },
    {
      label: "Delete Deal",
      value: wewenangMenuState.deleteDeal,
      onChange: () => setWewenangMenuState((prev) => ({ ...prev, deleteDeal: !prev.deleteDeal })),
    },
    {
      label: "Delete Update",
      value: wewenangMenuState.deleteUpdate,
      onChange: () =>
        setWewenangMenuState((prev) => ({ ...prev, deleteUpdate: !prev.deleteUpdate })),
    },
    {
      label: "Report",
      value: wewenangMenuState.report,
      onChange: () => setWewenangMenuState((prev) => ({ ...prev, report: !prev.report })),
    },
  ];

  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAllWewenang = (checked: boolean) => {
    setCheckAll(checked);
    setWewenangMenuState((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        newState[key] = checked;
      });
      return newState;
    });
  };

  return (
    <section>
      <form className="flex flex-col gap-y-8">
        <Card title="Edit Staff Data">
          <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:gap-x-4">
            {inputFields.map((field) => (
              <div key={field.id} className="w-full md:w-[calc(50%-8px)]">
                <Textinput
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  register={register}
                  defaultValue={selectedStaff?.[field.id]}
                  className="h-[52px]"
                />
              </div>
            ))}
            <div className="w-full md:w-[calc(50%-8px)]">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <Select
                className="react-select"
                classNamePrefix="select"
                defaultValue={status[0]}
                options={status}
                styles={styles}
                id="status"
                name="status"
              />
            </div>
          </div>
        </Card>
        <div className="relative">
          <Card title="Wewenang Menu">
            <div className="space-xy-6 flex flex-col sm:flex-row sm:flex-wrap xl:justify-between">
              {wewenangMenuOptions.map((option, index) => (
                <Checkbox
                  key={index}
                  label={option.label}
                  value={option.value}
                  activeClass="ring-primary-500 bg-primary-500"
                  onChange={option.onChange}
                />
              ))}
            </div>
            <div className="absolute right-6 top-6">
              <Checkbox
                label="Check All"
                value={checkAll}
                activeClass="ring-primary-500 bg-primary-500"
                onChange={() => handleCheckAllWewenang(!checkAll)}
              />
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {wewenangArray.map(({ name: region }) => (
            <div key={region} className="relative">
              <Card title={`Wewenang Cabang ${region}`}>
                {renderCheckboxes(region)}
                <div className="absolute right-6 top-6">
                  <Checkbox
                    label="Check All"
                    value={checkAllState[region]}
                    activeClass="ring-primary-500 bg-primary-500"
                    onChange={() => handleCheckAllChange(region)}
                  />
                </div>
              </Card>
            </div>
          ))}
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
    </section>
  );
};

export default Page;
