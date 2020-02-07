import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="hamburger-text-wrapper">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div class="nav-bar-row has-flex">
          <div className="vertical-text-center w-100">
            <div className="m-l-auto">
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
            <div className="m-l-auto cart-container">
              <span>cart</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
