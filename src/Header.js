import React from "react";
import "./Header.css";
import logo from "./assets/linkedin.svg";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import myself from "./assets/IMG_9925.JPG";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="linkedin_logo" />
        <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={myself} title="me" />
      </div>
    </div>
  );
}

export default Header;
