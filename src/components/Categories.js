import React from "react";

class Categories extends React.Component {
  render() {
    return (
      <div className="p-t-1 p-b-1">
        <div className="product-category p-c-1">
          <img
            src="/images/women-category.png"
            alt="category 1"
          />
          <div className="rectangle vertical-text-center">
            <h1>Womens</h1>
          </div>
        </div>
        <div className="product-category p-c-1 p-c-2">
          <img
            src="/images/men-category.png"
            alt="category 1"
          />
          <div className="rectangle vertical-text-center">
            <h1>Mens</h1>
          </div>
        </div>
        <div className="product-category p-c-3">
          <img id="p-c-3-m"
            src="/images/accessory-category-mobile.png"
            alt="category 2"
          />
          <img id="p-c-3-d"
            src="/images/accessory-category-desktop.png"
            alt="category 2"
          />
          <div className="rectangle vertical-text-center">
            <h1>Accessories</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
