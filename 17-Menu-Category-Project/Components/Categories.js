import React, { useState } from "react";
import menu from "../data";

const Categories = ({ categories, filteredCategory }) => {
  const [mainCategory, setMainCategory] = useState("all");
  // console.log(categories);
  return (
    <div className="btn-container">
      {categories.map(menuItem =>
        <button
          type="button"
          // highlight class  for highlight main category
          className={
            menuItem === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          onClick={() => {
            setMainCategory(menuItem);
            filteredCategory(menuItem);
          }}
        >
          {menuItem}
        </button>
      )}
    </div>
  );
};

export default Categories;
