import React from "react";
import { Icons } from "../Icons/Icons";
import "./Favorites.css";

export const Favorites = ({ isSelected, addToFavorite }) => (
  <div className="favorite-icon" onClick={addToFavorite}>
    {isSelected ? <Icons type="favoriteFilled" /> : <Icons type="favorite" />}
  </div>
);
