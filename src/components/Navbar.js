import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div class="nav-bar-row has-flex">
          <div className="hamburger-text-wrapper col">
            <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="nav-col">
            <span>Logo</span>
          </div>
          <div className="nav-col">
            <ul className="nav-links">
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Contacts</a>
              </li>
              <li>
                <a href="/#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <span>cart</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
