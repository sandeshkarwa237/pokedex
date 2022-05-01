import React from "react";

export const Checkbox = ({ isChecked, onClick, label, id }) => {
  return (
    <div class="form-check float-end">
      <input
        class="form-check-input"
        type="checkbox"
        value={isChecked}
        id={id}
        onClick={onClick}
      />
      <label class="form-check-label" for="viewFavorites">
        {label}
      </label>
    </div>
  );
};
