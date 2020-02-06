import React from "react";

const ImageCard = (props) => {
  return (
    <>
      <div className="ImageCardContainer">
          <img src="https://shirtspacev4productimages.s3.amazonaws.com/uploads/variant/front_image/43668/large_C1717_00.jpg" alt="card"/>
          <div>Prod title</div>
          <div>name (womens shirt)</div>
          <div>cost</div>
      </div>
    </>
  );
};

export default ImageCard;
