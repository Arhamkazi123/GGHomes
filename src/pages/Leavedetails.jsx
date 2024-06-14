import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LeaveDetails = ({ property }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const [Propertyname, setPropertyname] = useState(
    localStorage.getItem("propertyName") || ""
  );
  const [Propertbudget, setPropertbudget] = useState(
    localStorage.getItem("budget") || ""
  );
  const [Propertylocation, setPropertylocation] = useState(
    localStorage.getItem("location") || ""
  );
  const [bookActive, setBookActive] = useState(true); // State for "Book a Visit" button
  const [enquireActive, setEnquireActive] = useState(false); // State for "Enquire now" button

  const toggleButtons = (activeButton) => {
    if (activeButton === "book") {
      setBookActive(true);
      setEnquireActive(false);
    } else if (activeButton === "enquire") {
      setBookActive(false);
      setEnquireActive(true);
    }
  };
  const handleBookClick = () => {
    toggleButtons("book");
    // Add any other functionality here
  };

  const handleEnquireClick = () => {
    toggleButtons("enquire");
    // Add any other functionality here
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: name,
      phone: phone,
      Propertyname: Propertyname,
      Propertbudget: Propertbudget,
      Propertylocation: Propertylocation,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.removeItem("propertyName");
        localStorage.removeItem("budget");
        localStorage.removeItem("location");
        toast.success(
          "Registration successfull, We will reach you in some time"
        );
        navigate("/");
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <>
      <div
        className="leave-details-container"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          width: "450px" /* Adjusted width */,
          marginTop: "175px",
          marginLeft: "auto",
          marginRight:
            "20px" /* Add margin to align with the right container */,
          position: "sticky",
          top: "20px", // Adjust as needed
        }}
      >
        <button
          onClick={handleBookClick}
          style={{
            fontWeight: "bolder",
            color: bookActive ? "white" : "#132F40",
            backgroundColor: bookActive ? "#132F40" : "white",
            border: bookActive ? "none" : "1px solid #132F40",
            padding: "12px 24px",

            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginRight: "10px",
            borderRadius: bookActive ? "25px" : "5px", // Set borderRadius conditionally
          }}
        >
          Book a Visit
        </button>
        <button
          onClick={handleEnquireClick}
          style={{
            fontWeight: "bolder",
            color: enquireActive ? "white" : "#132F40",
            backgroundColor: enquireActive ? "#132F40" : "white",
            border: enquireActive ? "none" : "1px solid #132F40",
            padding: "10px 20px",
            borderRadius: enquireActive ? "25px" : "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Enquire now
        </button>

        <form onSubmit={handlesubmit}>
          <div className="form-group" style={{ marginTop: "15px" }}>
            <label
              htmlFor="name"
              style={{
                color: "#132f40",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Please enter your name"
              id="name"
              required
              autoComplete="off"
              className="form-control"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="phone"
              style={{
                color: "#132f40",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Contact Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              placeholder="Phone number"
              id="phone"
              required
              autoComplete="off"
              className="form-control"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#132f40",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LeaveDetails;
