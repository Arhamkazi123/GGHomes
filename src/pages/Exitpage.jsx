import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exitpage.css";

const Exitpage = () => {
  const navigate = useNavigate();

  const handlebtn = () => {
    navigate("/");
  };

  return (
    <div className="exit-page-container">
      <h1 className="exit-page-heading">Oops! Page Not Found</h1>
      <p className="exit-page-message">
        We're sorry, but the page you are looking for does not Exist.
      </p>
      <button className="exit-page-button" onClick={handlebtn}>
        Return to Home Page
      </button>
    </div>
  );
};

export default Exitpage;
