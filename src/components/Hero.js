import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="hero-wrapper bg-red">
          <div className="hero"></div>
          <div className="hero-text-wrapper vertical-text-center">
            <div className="overlay-hero-text">
              <h2>Title Goes Here</h2>
              <h3>Tagline will go right here</h3>
              <button class="shop-now-button">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
