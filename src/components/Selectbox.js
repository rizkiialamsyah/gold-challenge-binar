import React from "react";

const SelectBox = ({ label = "", title = "", data = [], ...props }) => {
  return (
    <div className="form-group" style={{ width: "15rem" }}>
      <label>{label}</label>
      <select
        {...props}
        className="form-control"
        placeholder="Masukan Kapasitas Mobil"
        id="inputGroupSelect01"
      >
        <option selected value={""} disabled>
          {title}
        </option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
