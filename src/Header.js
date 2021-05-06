import React from "react";
import "./Header";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <div className="header___option"></div>
        <div className="header___option"></div>
        <div className="header___option"></div>
      </div>
    </div>
  );
};

export default Header;
