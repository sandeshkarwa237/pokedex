import React from "react";
import { useLocation } from "react-router-dom";
import "./ItemDetailPage.css";

export const ItemDetailPage = () => {
  const { state } = useLocation();
  const { itemDetails } = state;
  return <div className="row">Item detail Page</div>;
};
