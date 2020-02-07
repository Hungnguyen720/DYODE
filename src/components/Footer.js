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
            <span>Contact Us</span>
            <span>Return Policy</span>
            <span>FAQ</span>
            <span>Gift Certificates</span>
            <span>Wishlist</span>
            <span>About Us</span>
            <div className="footer_cust-service padding-top padding-bottom">
              <h1>Company</h1>
              <span className="padding-right">+</span>
            </div>
            <h1>Follow us</h1>
            <div className="social-media-icons">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD///9bW1urq6uAgIDV1dXS0tJiYmL39/fHx8fi4uKioqLZ2dno6Ojc3NzDw8O8vLyYmJi2trZHR0cgICCNjY2xsbE4ODh2dnaPj4/v7+8XFxdMTEwyMjIJCQlWVlZpaWl8fHwoKChwcHAFP19cAAADdklEQVR4nO3dbVPiMBiFYUsRgYJQ3lERlP//H92dcXeWoUifNPuck8y5P/mJySUokKTpwwOu1fa466/3+7quqz+VZfn35/q7qgccZFjvy3M9m0yLtlXoAds6VYOX1rbkhKv1oxGXlPD1YxDCS0Z4KK2vzcSEZTDvVyV69Pfrd/ElINyG/v2lItwNOwKLDZrwc1VXH7tw1h3ILRxFABYLtOKHYjyD1MJNFCCxcB0HWMzRkFu9RQLyCsM/iCYijPBG+N0MTWluGw1YjNCW5uK8URALl/GApMKITyGn8DMisBigNU3tsxe2nwxNVBjxrYJUGPVFWjyiOQ0FTfymJHztPDXDLjxFBTIK67jCZ7TnuiizM9TCce7CVbTvvqzCmN8rfjdGg67qRRZO0aCrdtkLY80i8go7zEENm+L7T2Nf8J1U5y161Jask/njI3rE1hY24PQVPWBzc5vwhB6vPds82wt6uAHZPnjzrp3dzrb3Yo8ebkA24Qk93IBsszRL9HADmpiEB/RwA7IJP9HDDejZJFyhhxuQTZjeJxrrNE3+wnf0cAOSUEL+bMuj+QvRow3JJByiRxuShBLyZxKmOE0j4WV8ixItklBC/kxCviXsFkmYjvDQa+xo2mwyPTY/yr8PCBN2vPi1/S8heyHu+kMvIW51ykvYz174lL0Qt/7mJcSt3XgJYUAvIfA7spMQ+LnOSQi8dM1JCNxw4yQEHsDjJFxnL9xlLwTuPnUSArcUOQmBS6hOQhzQSYhcnPIRIifjfITI65x9hMiTTXyEyH3gPkLkuZA+QtxMm5cQN9PmJXzLXoi8qM1FOETudHcRTpF7F12E0BVUF+EkeyH0ODoXIfSoaxchcKbNSXhOXzhobjQazeabage9pObw1Fgv/11fpustJKRMQgn5Mwmp9ybeSkIJ+ZNQQv5MJw5ISJmEEvIn4UV8hyK2SEIJ+ZNQQv5M57VJSJmEEvJnEkJ3IoQmoYT8SSghf6azoCWkTEIJ+ZPwIsIb491PQgn5kzB9oekuLBJSJqGE/El4EeON0+8moYT8SSghfxJKyJ9JCDzZMjwJ0xea7gcsIWUSSsifhBLyl79wJqGE9EkoIX8SXgQ9Uy+0/IVzCSWkT0IJ+ZNQQv4klJA/CSXkT8KL5ujRhrSQUEL6JJSQv/yF+b/jf2zK1m3+943jvgB+FlCWC4XCKgAAAABJRU5ErkJggg=="
                alt="facebook"
              />
              <img
                src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png"
                alt="instagram"
              />
              <img
                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
                alt="twitts"
              />
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
