import React from "react";

class Social extends React.Component {
  render() {
    return (
      <div>
        <div className="social">
          <h1 className="social-header">Follow Us on Instagram!</h1>
          <div className="social-images-container">
            <div className="social-images-wrapper">
              <img
                src="/images/social-1.png"
                alt="instagram"
              ></img>
            </div>
            <div className="social-images-wrapper">
              <img
                src="/images/social-2.png"
                alt="instagram"
              ></img>
            </div>
            <div className="social-images-wrapper">
              <img
                src="/images/social-3.png"
                alt="instagram"
              ></img>
            </div>
            <div className="social-images-wrapper d-n">
              <img
                src="/images/social-4.png"
                alt="instagram"
              ></img>
            </div>
            <div className="social-images-wrapper d-n">
              <img
                src="/images/social-5.png"
                alt="instagram"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
