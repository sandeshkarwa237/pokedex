import React from "react";
import "./Pill.css";
import { capitalizeFirstLetter } from "../../../utils/formatter";

export const Pill = ({ name, size = "small" }) => (
  <span className={`pillContainer pill-${name} pill-${size}`}>
    {capitalizeFirstLetter(name)}
  </span>
);
