import React from "react";
import { Icons } from "../Icons/Icons";
import "./SearchField.css";

export const SearchField = ({ value, onChange, placeholderText }) => (
  <div className="search-field-container rounded">
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="search-field rounded"
      placeholder={placeholderText}
    />
    <span className="search-field-icon">
      <Icons type="search" />
    </span>
  </div>
);
