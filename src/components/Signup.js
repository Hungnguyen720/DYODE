import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <div className="signup">
          <div className="signup-heading">
            <h2>Sign up & stay connected</h2>
            <p>
              Sign up for the newsletter and get 20% off! Get access to
              exclusive offers and be the first to know when new stuff drops.
            </p>
          </div>
          <div>
            <form id="contact-form">
              <input></input>
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
