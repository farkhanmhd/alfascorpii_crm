"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";

const inputFields = [
  { id: "username", label: "Username", placeholder: "johndoe" },
  { id: "nama", label: "Nama", placeholder: "John Doe" },
  { id: "telepon", label: "Telepon", placeholder: "081234567890" },
  { id: "nip", label: "NIP", placeholder: "12345678" },
];

const Page = () => {
  const router = useRouter();
  const { register } = useForm();

  return (
    <Card title="Add new Staff">
      <form className="flex flex-col gap-y-8">
        {inputFields.map((field) => (
          <Textinput
            key={field.id} // Assign key based on the id
            id={field.id}
            label={field.label}
            placeholder={field.placeholder}
            register={register}
            className="h-[52px]"
          />
        ))}
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
            text="Add Staff"
            icon="heroicons-outline:plus"
          />
        </div>
      </form>
    </Card>
  );
};

export default Page;
