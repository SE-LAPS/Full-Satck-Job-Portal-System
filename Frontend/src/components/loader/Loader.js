import React from "react";
import "./Loader.css";
import logo from "../../assets/22.png";

const Loader = () => {
  return (
    <div className="loader">
      <div className="logo-wrapper">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="loading-text">Job-Hunter Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
