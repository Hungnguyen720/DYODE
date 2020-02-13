import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-wrapper">
        <div className="hero">
          <img className="hero-mobile"
            src="/images/hero-mobile.png"
            alt="hero"
          />
          <img className="hero-desktop"
            src="/images/hero.png"
            alt="hero"
          />
        </div>
        <div className="hero-text-wrapper vertical-text-left">
          <div className="overlay-hero-text">
            <h2>Title Goes Here</h2>
            <span>Tagline will go right here</span>
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
