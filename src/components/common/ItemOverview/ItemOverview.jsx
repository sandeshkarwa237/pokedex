import React from "react";
import "./ItemOverview.css";
import { Pill } from "../Pill/Pill";
import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";

export const ItemOverview = () => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="product-container">
        <img
          className="product-image-container"
          src="https://i.ibb.co/L8Nrb7p/1.jpg"
          alt="pokemonImage"
        />
        <FavoriteIcon isSelected={false} />
        <h3 className="product-title">Pokemon Name</h3>
        <>
          <Pill />
        </>
      </div>
    </div>
  );
};
