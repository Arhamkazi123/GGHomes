import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./PopupForm.css"; // Import CSS file for styling
import titlelogo from "../images/newgghoes.jpg"; // Adjust the path as needed
import { data } from "../data.js";

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none", // Optional: remove border if desired
    padding: "20px",
    borderRadius: "10px", // Optional: add border radius for rounded corners
  },
};

Modal.setAppElement("#root"); // Make sure to set the correct app element

const PopupForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Extract unique locations from the data
    const uniqueLocations = [...new Set(data.map((item) => item.location))];
    setLocations(uniqueLocations);
  }, []);

  // Function to handle form submission
  const handleSubmit = () => {
    // Validate form fields
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "Please enter your name.";
    }
    if (!budget.trim()) {
      validationErrors.budget = "Please select a budget range.";
    }
    if (!location.trim()) {
      validationErrors.location = "Please select your location.";
    }

    // If there are validation errors, set them in state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no validation errors, prepare WhatsApp message and open WhatsApp link
    const message = `My name is ${name}\n and my Budget is ${budget}\n. I am looking for a hostel/PG at ${location}`;
    const whatsappLink = `https://wa.me/918302362370/?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Popup Form"
      closeTimeoutMS={200} // Add close timeout for smooth transition
      shouldCloseOnOverlayClick={false} // Prevent closing on overlay click
      shouldCloseOnEsc={false} // Prevent closing on Esc key press
    >
      <button onClick={onClose} style={closeButtonStyle}>
        Close
      </button>
      <div className="popup-content">
        <div className="header-container">
          <img src={titlelogo} alt="Title Logo" className="title-logo" />
          <h2 className="header-text">Fill in Details</h2>
        </div>
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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="dropdown-select"
        >
          <option value="">Select budget range</option>
          <option value="below 20k">Below 20k</option>
          <option value="20k-40k">20k - 40k</option>
          <option value="40k-60k">40k - 60k</option>
          <option value="60k-80k">60k - 80k</option>
          <option value="80k-100k">80k - 100k</option>
        </select>
        {errors.budget && <p className="error">{errors.budget}</p>}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="dropdown-select"
        >
          <option value="">Select location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        {errors.location && <p className="error">{errors.location}</p>}
        <button onClick={handleSubmit}>Contact us</button>
      </div>
    </Modal>
  );
};

const closeButtonStyle = {
  width: "45px",
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "3px 5px", // Reduce the padding to make the button smaller
  background: "#132f40",
  color: "white",
  border: "none",
  borderRadius: "3px", // Adjust the border-radius for a smaller button
  cursor: "pointer",
  fontSize: "12px", // Reduce the font size
};

export default PopupForm;
