import React from "react";

const ImageCard = props => {
  return (
    <>
      <div className="ImageCardContainer">
        <img
          src="https://shirtspacev4productimages.s3.amazonaws.com/uploads/variant/front_image/43668/large_C1717_00.jpg"
          alt="card"
        />
        <div>Product Title</div>
        <div>Women's T-shirt)</div>
        <div>$19.99</div>
      </div>
    </>
  );
};

export default ImageCard;
