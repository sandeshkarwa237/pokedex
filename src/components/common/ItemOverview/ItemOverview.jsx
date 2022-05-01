import React from "react";
import "./ItemOverview.css";
import { Pill } from "../Pill/Pill";
import { Favorites } from "../Favorites/Favorites";
import { capitalizeFirstLetter } from "../../../utils/formatter";

export const ItemOverview = ({
  imageSrc,
  title,
  types,
  isSelected,
  addToFavorite,
  showDetailsSection,
  id,
}) => (
  <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="product-container">
      <img
        className="product-image-container"
        src={imageSrc}
        alt={title + " image"}
        onClick={showDetailsSection}
      />
      <Favorites
        isSelected={isSelected}
        addToFavorite={() => addToFavorite(id)}
      />
      <h3 className="product-title" onClick={showDetailsSection}>
        {capitalizeFirstLetter(title)}
      </h3>
      {types.map(({ type: { name: pillText } }, index) => {
        return <Pill name={pillText} key={index} />;
      })}
    </div>
  </div>
);
