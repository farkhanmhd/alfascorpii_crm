// SelectInput.js
import React from "react";
import Select from "react-select";

const SelectInput = ({ label, options, defaultValue }) => {
  const customStyles = {
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
    }),
  };

  return (
    <div>
      <label className="form-label">{label}</label>
      <Select
        className="react-select"
        classNamePrefix="select"
        defaultValue={defaultValue}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectInput;
