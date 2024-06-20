import React, { useState } from "react";
import "./Findflat.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../pages/Footerpage/Footer.jsx";
import newgghoes from "../images/newgghoes.jpg";

const Findflat = () => {
  const [formData, setFormData] = useState({
    name: "",
    propertyType: "",
    requirement: "",
    subOption: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing again
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type";
      valid = false;
    }

    if (!formData.requirement) {
      newErrors.requirement = "Please select a requirement";
      valid = false;
    }

    if (
      formData.propertyType === "residential" &&
      formData.requirement === "rent" &&
      !formData.subOption
    ) {
      newErrors.subOption = "Please select a tenant type";
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number should be 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Construct the WhatsApp message
      const message = `Hi my name is ${formData.name},
      I am looking for 
Property Type: ${formData.propertyType}
Requirement: To ${formData.requirement}
${
  formData.requirement === "rent" ? ` Occupant Type: ${formData.subOption}` : ""
}
Address: ${formData.address}
Phone: ${formData.phone}
`;

      // Generate WhatsApp link
      const whatsappLink = `https://wa.me/918302362370/?text=${encodeURIComponent(
        message
      )}`;

      // Open WhatsApp link in a new tab
      window.open(whatsappLink, "_blank");

      // Handle form submission logic here
      console.log("Form Data Submitted: ", formData);

      // Reset form after submission
      setFormData({
        name: "",
        propertyType: "",
        requirement: "",
        subOption: "",
        address: "",
        phone: "",
      });
    } else {
      console.log("Form submission halted due to errors");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="header">
          <img src={newgghoes} alt="GG Homes" className="header-image" />
          <h1>Explore Your Next Property</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="propertyType">Property</label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
            {errors.propertyType && (
              <p className="error-message">{errors.propertyType}</p>
            )}
          </div>
          {formData.propertyType === "residential" && (
            <div className="form-group">
              <label>Requirement:</label>
              <div className="wants-to-group">
                <label>
                  <input
                    type="radio"
                    name="requirement"
                    value="buy"
                    checked={formData.requirement === "buy"}
                    onChange={handleChange}
                    required
                  />
                  Buy
                </label>
                <label>
                  <input
                    type="radio"
                    name="requirement"
                    value="rent"
                    checked={formData.requirement === "rent"}
                    onChange={handleChange}
                    required
                  />
                  Rent
                </label>
              </div>
              {errors.requirement && (
                <p className="error-message">{errors.requirement}</p>
              )}
            </div>
          )}
          {formData.propertyType === "residential" &&
            formData.requirement === "rent" && (
              <div className="form-group">
                <label>Preferred Occupant</label>
                <select
                  name="subOption"
                  value={formData.subOption}
                  onChange={handleChange}
                  required
                >
                  <option value="">Occupant Type</option>
                  <option value="family">Family</option>
                  <option value="bachelors">Bachelors</option>
                </select>
                {errors.subOption && (
                  <p className="error-message">{errors.subOption}</p>
                )}
              </div>
            )}
          <div className="form-group">
            <label htmlFor="address">Area preference:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="off"
              placeholder="For eg. Andheri West"
              required
            />
            {errors.address && (
              <p className="error-message">{errors.address}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact No:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Findflat;
