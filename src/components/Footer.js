import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer bg-black">
          <div className="footer-customer-service-heading">
            <h1>Customer Service</h1>
            <h1>-</h1>
          </div>
          <div className="footer-customer-service-list">
            <ul>
              <li>
                <a href="/#">Accessibility</a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
              <li>
                <a href="/#">Return Policy</a>
              </li>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Gift Certificates</a>
              </li>
              <li>
                <a href="/#">Wishlist</a>
              </li>
              <li>
                <a href="/#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-company-heading">
            <h1>Company</h1>
            <span>+</span>
          </div>
          <div className="footer-company-list">
            {/*
            <ul>
              <li></li>
            </ul>
            */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
