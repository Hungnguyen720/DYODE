import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="hamburger-text-wrapper">
          <div className="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
        <span>Logo</span>
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
      </nav>
    );
  }
}

export default Navbar;
