import React from "react";
import "./styles.css";

export default function FormInput({
  label,
  type = "text",
  id,
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
  onBlur
}) {
  return (
    <div className="form-input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        onBlur={onBlur}
      />
    </div>
  );
}
