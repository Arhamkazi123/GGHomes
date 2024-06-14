import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";
import Footer from "../pages/Footerpage/Footer.jsx";

const Contact = () => {
  // State variables for form inputs and errors
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required.";
    }
    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone number is required.";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required.";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // If validation passes, proceed with form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData({
      name: "",
      phoneNumber: "",
      message: "",
    });
    // Reset errors
    setErrors({});
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="badahumein">Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "input-error" : ""}
              autoComplete="off"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={errors.phoneNumber ? "input-error" : ""}
              autoComplete="off"
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Drop a Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? "input-error" : ""}
              autoComplete="off"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button className="btnhai" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
