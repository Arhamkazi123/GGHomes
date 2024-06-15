import React, { useEffect, useState } from "react";
import { data } from "../data.js";
import "./Detailspage.css";
import Navbar from "../components/Navbar.jsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import Imageslider from "../components/Imageslider.jsx";
import { FaKitchenSet } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { FaToilet, FaHotjar, FaHandHoldingWater } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { GiCooler } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import LeaveDetails from "../pages/Leavedetails.jsx"; // Import the LeaveDetails component
import { FaBed } from "react-icons/fa";
import Footer from "../pages/Footerpage/Footer.jsx";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaHireAHelper } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { FaElevator } from "react-icons/fa6";
import { GiCctvCamera } from "react-icons/gi";

const Detailspage = () => {
  const [property, setProperty] = useState(null);
  const [showLeaveDetails, setShowLeaveDetails] = useState(false);
  const [bookNowClicked, setBookNowClicked] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const propertyId = localStorage.getItem("propertyId");
    if (propertyId !== null && isMounted) {
      const id = parseInt(propertyId);
      const selectedProperty = data.find((item) => item.id === id);
      if (selectedProperty) {
        setProperty(selectedProperty);
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const handleBookNow = () => {
    localStorage.setItem("propertyName", property.name);
    localStorage.setItem("budget", property.price);
    localStorage.setItem("location", property.location);
    setShowLeaveDetails(true); // Show the leave details sidebar when booking now
    setBookNowClicked(true); // Set bookNowClicked to true
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  const amenityIcons = {
    Parking: <FaParking />,
    Cupboard: <BiCabinet />,
    "Attached Bathroom": <FaToilet />,
    "Washing Machine": <GiWashingMachine />,
    Geyser: <FaHotjar />,
    "A/C": <GiCooler />,
    RO: <FaHandHoldingWater />,
    "Modular Kitchen": <FaKitchenSet />,
    Electricity: <AiFillThunderbolt />,
    Housekeeping: <FaHireAHelper />,
    Laundry: <MdLocalLaundryService />,
    Elevator: <FaElevator />,
    CCTV: <GiCctvCamera />,
  };

  return (
    <>
      <Navbar />
      <div className="detailspage-container">
        <div className="property-details">
          <h1 style={{ fontWeight: "bolder", fontSize: "55px" }}>
            {property.name}{" "}
          </h1>
          <p>
            <FaMapMarkerAlt className="iconsmasti" />
            {property.location}
          </p>
          <Imageslider images={property.images} />

          <p
            className="paisa"
            style={{ marginTop: "35px", fontSize: "25px", color: "#132F40" }}
          >
            Starts from <br /> <br />
            <span style={{ color: "#F2BA52", fontSize: "60px" }}>
              ₹{property.price}/-
            </span>{" "}
            /* month
          </p>

          <h2 style={{ marginTop: "50px", marginBottom: "30px" }}>
            Rent Structure
          </h2>

          <div className="rent-structure">
            <div className="column">
              {property.rent.map((rentItem, index) => (
                <div key={index} className="rent-item">
                  {rentItem.occupancy.includes("Single") && (
                    <p>
                      <FaBed color=" #132F40" /> X 1{" "}
                      <span style={{ color: "#F2BA52" }}>{rentItem.price}</span>
                    </p>
                  )}
                  {rentItem.occupancy.includes("Double") && (
                    <p>
                      <FaBed color=" #132F40" /> X 2{" "}
                      <span style={{ color: "#F2BA52" }}>{rentItem.price}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="column">
              {property.rent.map((rentItem, index) => (
                <div key={index} className="rent-item">
                  {rentItem.occupancy.includes("Triple") && (
                    <p>
                      <FaBed color=" #132F40" /> X 3{" "}
                      <span style={{ color: "#F2BA52" }}>{rentItem.price}</span>
                    </p>
                  )}
                  {rentItem.occupancy.includes("Quad") && (
                    <p>
                      <FaBed color=" #132F40" /> X 4{" "}
                      <span style={{ color: "#F2BA52" }}>{rentItem.price}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ marginTop: "35px", marginBottom: "30px" }}>Overview</h2>
          <div className="overview-grid">
            <div>
              <p>
                <strong style={{ color: "#F2BA52" }}>House Type:</strong>{" "}
                {property.houseType}
              </p>
              <p>
                <strong style={{ color: "#F2BA52" }}>Furnished:</strong>{" "}
                {property.furnished}
              </p>
            </div>
            <div>
              <p>
                <strong style={{ color: "#F2BA52" }}>Gender:</strong>{" "}
                {property.gender}
              </p>
              <p>
                <strong style={{ color: "#F2BA52" }}>Meals included:</strong>{" "}
                {property.Meals}
              </p>
            </div>
          </div>

          <h2 style={{ marginTop: "50px", marginBottom: "30px" }}>
            About <span style={{ color: "#F2BA52" }}>this</span> place
          </h2>
          <p>{property.About}</p>

          <h2 style={{ marginTop: "50px", marginBottom: "30px" }}>Amenities</h2>

          <div className="amenities-grid">
            {property.amen.map((amenity, index) => (
              <div
                style={{ color: "#F2BA52" }}
                key={index}
                className="amenity-item"
              >
                {amenityIcons[amenity] && (
                  <>
                    {amenityIcons[amenity]}
                    <p style={{ color: " #132F40" }}>{amenity}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          {!bookNowClicked && ( // Render the button only if it's not clicked
            <button className="book-now-button" onClick={handleBookNow}>
              Book Now
            </button>
          )}
        </div>
        {/* Conditionally render the leave details sidebar */}
        {showLeaveDetails && (
          <div className="leave-details-sidebar">
            <LeaveDetails property={property} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Detailspage;
