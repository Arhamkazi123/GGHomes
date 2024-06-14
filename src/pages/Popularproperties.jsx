import React from "react";
import { devdata } from "../Devdata.js";
import "./Pop.css";
import { RiArmchairFill } from "react-icons/ri";
import { FaRupeeSign, FaTransgenderAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

const Popularproperties = () => {
  const nav = useNavigate();
  const handlecardclick = () => {
    navigate(`/details`);
  };

  return (
    <div className="popular-properties-container">
      <h6 style={{ marginLeft: "20px", fontSize: "50px" }}>
        Recommended By <span style={{ color: "#D9A86C" }}>Us</span>
      </h6>

      <div className="property-list" onClick={handlecardclick}>
        {devdata.map((item) => (
          <div className="property-card" key={item.id}>
            <div className="image-container">
              <img
                src={item.images[0]}
                alt={`Property ${item.id} Image`}
                className="property-image"
              />
            </div>
            <h2
              className="h2title"
              style={{ color: "#132F40", fontWeight: "bolder" }}
            >
              {item.name}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#132F40",
                fontWeight: "bolder",
              }}
            >
              <FaLocationDot />
              <h3
                className="locationkochedo"
                style={{
                  margin: "0",
                  marginRight: "5px",
                  color: "#D9A86C",
                  fontWeight: "bolder",
                }}
              >
                {item.location}
              </h3>
            </div>
            <p
              className="starting-from-text"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Starting from{" "}
            </p>{" "}
            <div
              style={{
                marginTop: "1px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaRupeeSign
                style={{
                  marginRight: "2px",
                  color: "#D9A86C",
                  fontWeight: "bolder",
                }}
              />
              <p
                style={{
                  fontSize: "23px",
                  color: "#132F40",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                {item.price}/-
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <RiArmchairFill
                  style={{ color: "#132F40", fontWeight: "bolder" }}
                />
                <p style={{ marginLeft: "5px", marginRight: "10px" }}>
                  {item.furnished}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaTransgenderAlt
                  style={{
                    marginRight: "5px",
                    color: "#132F40",
                    fontWeight: "bolder",
                  }}
                />
                <p
                  style={{
                    marginRight: "40px",
                    color: "#132F40",
                    fontWeight: "bolder",
                  }}
                >
                  {" "}
                  {item.gender}
                </p>
              </div>
            </div>
            <div className="amenities-container">
              {item.amenities &&
                item.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-icon">
                    {amenityIcons[amenity]}
                    <p style={{ marginLeft: "5px" }}>{amenity}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularproperties;
