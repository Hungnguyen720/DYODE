import React from "react";

class Hero extends React.Component {
  render() {
    return (
        <div className="hero-wrapper">
          <div className="hero">
            <img src="https://cdn.shopify.com/s/files/1/0193/6253/files/1600X1000_277d8ba4-863c-4445-b55c-f857162b1465_2000x.jpg?v=1576015212" alt="hero"/>
          </div>
          <div className="hero-text-wrapper vertical-text-left">
            <div className="overlay-hero-text">
              <h2>Title Goes Here</h2>
              <h3>Tagline will go right here</h3>
              <button className="shop-now-button">Shop Now</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Hero;
