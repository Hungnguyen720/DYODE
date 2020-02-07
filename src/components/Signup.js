import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <div className="signup">
          <h2>Sign up & stay connected</h2>
          <div className="signup-wrapper">
            <div className="signup-heading">
              <p>
                Sign up for the newsletter and get 20% off! Get access to
                exclusive offers and be the first to know when new stuff drops.
              </p>
            </div>
            <div className="form-wrapper vertical-text-center">
              <form id="contact-form">
                <input placeholder="Your Email Address"></input>
                <button className="subscriber-button bg-main-theme b-w-1">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
