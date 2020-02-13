import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-container">
        <div className="hamburger-text-wrapper">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="cart-container">
              <img src="https://www.hmsmotorsport.com/img/cart-white.png" alt="shopping cart" height="11" width="11"></img>
            </div>
          <div className="vertical-text-center w-100 nav-container">
            <div className="logo-container">
              <span>Logo</span>
              </div>
            <div className="inline-lists-wrapper">
              <ul className="inline-lists">
                <li>
                  <a href="/#">Womens</a>
                </li>
                <li>
                  <a href="/#">Mens</a>
                </li>
                <li>
                  <a href="/#">Accessories</a>
                </li>
                <li>
                  <a href="/#">Sale!</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
