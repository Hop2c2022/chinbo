import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="HeaderBig">
      <div className="headerLeft">
        <img className="neftlixLogo" src="Logo.svg" />
        <Link className="headerMenu" to="/  ">
          Home
        </Link>
        <Link className="headerMenu" to="/tv">
          TV Shows
        </Link>
        <Link className="headerMenu" to="/latest">
          Latest
        </Link>
        <Link className="headerMenu" to="/bbl">
          Browsers by Languages
        </Link>
      </div>
      <div className="headerRight">
        <img className="headerSearch" src="search.svg" />
        <img className="headernotif" src="notif.svg" />
        <img />
      </div>
    </div>
  );
};
