import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png" alt="" /> */}
          <span className="cineClick">CINECLICK</span>
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>TV Shows</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <Notifications className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <Link to="/login" className="link">
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
