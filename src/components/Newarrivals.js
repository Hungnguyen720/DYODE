import React from "react";
import ImageCard from "./ImageCard";

const Newarrivals = () => {
  return (
    <div>
      <div className="newArrivals_header">
        <h3>New Arrivals</h3>
      </div>
      <div className="newArrivals">
        <div className="arrow">arrow</div>
        <div className="newArrivals_image">
          <ImageCard />
        </div>
        <div className="newArrivals_image">
          <ImageCard />
        </div>
        <div className="arrow">arrow</div>
      </div>
    </div>
  );
};

export default Newarrivals;
