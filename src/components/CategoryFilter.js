import React from "react";

function CategoryFilter( { categories, selectedCategory, handleSelectedCategory }) {

  const categoryButtons = categories.map(category => (
    // Below, when you need to pass something into an onclick function, you use () => Function(Here) to do it. Nice.
    <button 
      onClick={() => handleSelectedCategory(category)} 
      key={ category }
      // Slick way to dynamically change the css on the button.
      className={category === selectedCategory ? "selected" : null }
      >
        { category }
      </button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
