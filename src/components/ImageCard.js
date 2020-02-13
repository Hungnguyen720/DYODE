import React from "react";

const ImageCard = props => {
  return (
    <>
      <div className="ImageCardContainer">
        <img
          src="/images/new-arrivals.png"
          alt="card"
        />
        <div>Product Title</div>
        <div>Women's T-shirt</div>
        <span>$19.99</span>
      </div>
    </>
  );
};

export default ImageCard;
