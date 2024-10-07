// DateInput.js
import React from "react";
import Flatpickr from "react-flatpickr";

const DateInput = ({ label, value, onChange }) => (
  <div>
    <label className="form-label">{label}</label>
    <Flatpickr
      value={value}
      className="form-control py-2"
      onChange={onChange}
      options={{ dateFormat: "j F, Y" }}
    />
  </div>
);

export default DateInput;
