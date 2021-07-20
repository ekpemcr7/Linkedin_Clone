import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="Header">
      <div className="header_left">
        <img
          src="https://img.icons8.com/cute-clipart/512/000000/linkedin.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right"></div>
    </div>
  );
}

export default Header;
