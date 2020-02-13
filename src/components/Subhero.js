import React from "react";

class Subhero extends React.Component {
  render() {
    return (
      <div>
        <div className="hero-wrapper">
          <div className="hero">
            <img className="hero-2-image-m"
              src="/images/hero-2-mobile.png"
              alt="hero"
            />
            <img className="hero-2-image-d"
              src="/images/hero-2.png"
              alt="hero"
            />
          </div>
          <div className="hero-text-wrapper vertical-text-left m-l-50">
            <div className="overlay-hero-text">
              <h2>Title Goes Here</h2>
              <span>Tagline will go right here</span>
              <button className="shop-now-button bg-main-theme">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subhero;
