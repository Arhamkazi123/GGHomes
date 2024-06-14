import React from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import "./Navbar.css";
import newgghoes from "../images/newgghoes.jpg";

const Navbar = () => {
  const title = "GG HOMESSSS";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={newgghoes} alt="GGomes" className="navbar-logo" />
        <h5 className="navbar-title">
          {title.split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h5>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link home-button">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/flats" className="nav-link home-button">
              Flats
            </Link>
          </li>

          <li className="nav-item">
            {/* Contact number button */}
            <a href="tel:+918302362370" className="nav-link contact-button">
              <MdCall className="phone-icon" />
              8302362370
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
