import React from "react";
import myIcon from "../src/Images/Appicon.png"

const Header = () => {
  return (
    <div className="header">
        <ul className="htext">
          <a className="gmail" href="#gmail">Gmail</a>
          <a href="#gmail">Images</a>
        </ul>
        <img className="appicon" src={myIcon} alt="my icon"/>
      <div className="avatar"></div>
        <p>U</p>
    </div>
  );
};

export default Header;
