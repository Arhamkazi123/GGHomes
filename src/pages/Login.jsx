import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { data } from "../data.js";
import Popupform from "../components/Popupform.jsx";
import Footer from "../pages/Footerpage/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popularproperties from "./Popularproperties.jsx";
import Clientsserved from "../components/Clientsserved.jsx";
import About from "../components/About.jsx";
import titlelogo from "../images/newgghoes.jpg";

const LoginPage = () => {
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(true);
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup form
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup form
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    // Set a timeout to open the popup form after 2 minutes
    const timeoutId = setTimeout(() => {
      setIsPopupOpen(true);
    }, 10000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const uniqueLocations = Array.from(
    new Set(data.map((item) => item.location))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = {};
    if (!location.trim()) {
      validationErrors.location = "Please select a location.";
      setErrors(validationErrors);
      return;
    }
    navigate(`/home?location=${location}`);
  };

  useEffect(() => {
    toast("Hello there! Let's help you find a hostel");
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [userBudget, setUserBudget] = useState("");
  const [userGender, setUserGender] = useState("");

  const handleWhatsAppClick = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    if (userLocation && userBudget && userGender) {
      const message = `Hello there! I am interested in your hostel services. My preferred location is ${userLocation}, my budget is ${userBudget}, and searching for ${userGender} Hostel.`;
      const whatsappLink = `https://wa.me/918302362370/?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
      setIsModalOpen(false);
    } else {
      alert("Please provide all the required inputs.");
    }
  };

  return (
    <>
      <Navbar />
      <Popupform isOpen={isPopupOpen} onClose={closePopup} />

      {showLoginForm && (
        <div className="search-container">
          <form onSubmit={handleSubmit} className="search-bar">
            <select
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input"
            >
              <option value="">Select a location</option>
              {uniqueLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <i
              className="fas fa-search search-icon"
              style={{ color: "white", backgroundColor: "#F2A950" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#132F40"; // Change background color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#F2A950"; // Revert back to original color on hover out
              }}
              onClick={handleSubmit}
            ></i>
          </form>
        </div>
      )}

      <Popularproperties />

      <About />

      <Clientsserved />

      <div className="footerpage">
        <Footer />
      </div>

      <a href="#" onClick={handleWhatsAppClick} className="whatsapp_float">
        <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
      </a>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Input Modal"
        className="custom-modal"
        shouldCloseOnOverlayClick={false} // Prevent closing on overlay click
        shouldCloseOnEsc={false} // Prevent closing on Esc key press
      >
        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
          &times;
        </button>
        <h2 style={{ color: "#132F40", fontWeight: "bolder" }}>
          <img src={titlelogo} alt="Title Logo" className="title-logo" />
          Enter Details
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#132f40",
            fontWeight: "bolder",
            fontFamily: "Poppins",
          }}
        >
          Help us tailor your{" "}
          <span style={{ color: "#D9A86C" }}>Experience</span> by sharing your
          details below. Remember, you've always got a{" "}
          <span style={{ color: "#D9A86C" }}>Friend</span> in GG Homes!
        </p>

        <select
          value={userLocation}
          onChange={(e) => setUserLocation(e.target.value)}
          className="location-dropdown" // Apply any necessary styling here
        >
          <option value="">Select Location</option>
          {data
            .reduce((uniqueLocations, item) => {
              if (!uniqueLocations.includes(item.location)) {
                uniqueLocations.push(item.location);
              }
              return uniqueLocations;
            }, [])
            .map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
        </select>

        <div className="dropdown-container">
          <select
            value={userBudget}
            onChange={(e) => setUserBudget(e.target.value)}
            className="dropdown-select"
          >
            <option value="">Select budget range</option>
            <option value="below 20k">Below 20k</option>
            <option value="20k-40k">20k - 40k</option>
            <option value="40k-60k">40k - 60k</option>
            <option value="60k-80k">60k - 80k</option>
            <option value="80k-100k">80k - 100k</option>
          </select>
        </div>

        <select
          value={userGender}
          onChange={(e) => setUserGender(e.target.value)}
          className="gender-dropdown" // Apply any necessary styling here
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button
          style={{ backgroundColor: "#132F40", fontWeight: "bolder" }}
          onClick={handleModalSubmit}
        >
          Submit
        </button>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default LoginPage;
