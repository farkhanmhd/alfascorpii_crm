"use client";

import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = (e) => {
    setValue(e.target.value);
    setFilter(e.target.value || undefined);
  };
  return (
    <div>
      <Textinput
        className="h-[52px] sm:min-w-[300px]"
        value={value || ""}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default GlobalFilter;
