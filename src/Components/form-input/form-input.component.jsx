import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherprops }) => (
  <div className="group">
    <input className="form-input" {...otherprops} onChange={handleChange} />
    {label ? (
      <label
        className={`${
          otherprops.value.length ? "shrink" : ""
        }  form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
