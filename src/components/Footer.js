import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer bg-black">
          <div className="footer_wrapper">
            <div className="footer_cust-service">
              <h3>Customer Service</h3>
              <span className="padding-right">-</span>
            </div>
            <span>Accessibility</span>
            <span>asdfasdf</span>
            <span>asdfasdf</span>
            <span>asdfasdfasd</span>
            <span>asdfasdfasd</span>
            <span>asdfsdafasdf</span>
            <span>asdfasdfas</span>
            <div className="footer_cust-service padding-top padding-bottom">
              <span>Company</span>
              <span className="padding-right">+</span>
            </div>
            <span>Follow us</span>
            <div>
              <img src="" alt="facebook" />
              <img src="" alt="instagram" />
              <img src="" alt="twitts" />
            </div>
          </div>

          {/* <div className="footer-customer-service-heading">
            <h1>Customer Service</h1>
            <h1>-</h1>
          </div> */}
          {/* <div className="footer-customer-service-list">
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
          </div> */}
          {/* <div className="footer-company-heading">
            <h1>Company</h1>
            <span>+</span>
          </div> */}
          {/* <div className="footer-company-list"> */}
          {/*
            <ul>
              <li></li>
            </ul>
            */}
          {/* </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
