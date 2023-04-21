import React from "react";
import mySearch from "../src/Images/search.png"

const Button = () => {
  return (
    <>
    <img className="search" src={mySearch} alt="search icon" />
      <div className="button">
        <button className="button1" type="submit">Google Search</button>
        <button className="button2" type="button">I'm Feeling Lucky</button>
      </div>
    </>
  );
};

export default Button;
