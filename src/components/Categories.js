import React from "react";

class Categories extends React.Component {
  render() {
    return (
      <div className="p-t-1 p-b-1">
        <div className="product-category p-c-1">
          <img
            src="https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="category 1"
          />
          <div className="rectangle"></div>
        </div>
        <div className="product-category p-c-1 p-c-2">
          <img
            src="https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="category 1"
          />
          <div className="rectangle"></div>
        </div>
        <div className="product-category p-c-3">
          <img
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="category 2"
          />
          <div className="rectangle"></div>
        </div>
      </div>
    );
  }
}

export default Categories;
