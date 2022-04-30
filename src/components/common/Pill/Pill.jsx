import React from "react";
import "./Pill.css";
import { capitalizeFirstLetter } from "../../../utils/formatter";

export const Pill = ({ name }) => (
  <span className={`pillContainer pill-${name}`}>
    {capitalizeFirstLetter(name)}
  </span>
);
