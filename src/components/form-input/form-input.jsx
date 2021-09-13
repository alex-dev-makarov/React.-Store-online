import React from "react";

import "./form-input.style.scss";

export const FormInput = ({ handleChange, label, ...propsForm }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...propsForm} />
    {label ? (
      <label
        className={`${propsForm.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
