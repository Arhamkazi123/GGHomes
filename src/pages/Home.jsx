import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../data.js";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footerpage/Footer.jsx";
import Modal from "react-modal";
import Navbar from "../components/Navbar.jsx";
import { FaRupeeSign, FaTransgenderAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiArmchairFill } from "react-icons/ri";
import y from "../images/bg4.jpeg";
import Popupform from "../components/Popupform.jsx";
import titlelogo from "../images/newgghoes.jpg";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationValue = queryParams.get("location")?.toLowerCase();
  const navigate = useNavigate();

  const [budget, setBudget] = useState("all");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [gender, setGender] = useState("all");
  const [houseType, setHouseType] = useState("all");
  const [searchLocation, setSearchLocation] = useState(locationValue || "");
  const [showModal, setShowModal] = useState(false);
  const [showScheduleVisitModal, setShowScheduleVisitModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [userBudget, setUserBudget] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const uniqueLocations = [...new Set(data.map((item) => item.location))];

  const handleWhatsAppClick = () => {
    setIsModalOpen(true);
  };

  const handleScheduleVisitClick = (property) => {
    setSelectedProperty(property);
    setShowScheduleVisitModal(true);
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

  const handleScheduleVisitModalSubmit = () => {
    if (userName && selectedProperty) {
      const message = `Hello my name is ${userName} and I would like to schedule a visit for the property: ${selectedProperty.name}`;
      const whatsappLink = `https://wa.me/918302362370/?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
      setShowScheduleVisitModal(false);
    } else {
      alert("Please provide your name.");
    }
  };
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const getBudgetRange = (budget) => {
    switch (budget) {
      case "below10k":
        return [0, 10000];
      case "10k-20k":
        return [10000, 20000];
      case "20k-30k":
        return [20000, 30000];
      case "30k-40k":
        return [30000, 40000];
      case "40k-50k":
        return [40000, 50000];
      case "50k-60k":
        return [50000, 60000];
      case "60k-above":
        return [60000, Infinity];
      default:
        return [0, Infinity];
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      location: searchLocation.toLowerCase(),
      maxPrice,
      gender,
      houseType,
    });
    navigate(`/home?${queryParams.toString()}`);
  };

  const handleViewDetails = (id) => {
    localStorage.setItem("propertyId", id);
    navigate(`/details`);
  };

  const filteredData = data.filter((item) => {
    const matchesLocation =
      item.location.toLowerCase() === searchLocation.toLowerCase();
    const [minPrice, maxPrice] = getBudgetRange(budget);
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    const matchesGender =
      gender === "all" ? true : item.gender.toLowerCase() === gender;
    const matchesHouseType =
      houseType === "all" ? true : item.houseType.toLowerCase() === houseType;
    return matchesLocation && matchesPrice && matchesGender && matchesHouseType;
  });

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
    }, 60000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const sortedData = filteredData.sort((a, b) => b.price - a.price);

  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        "Did not find what you're looking for? Contact us now using our whatsapp icon"
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Popupform isOpen={isPopupOpen} onClose={closePopup} />
      <img
        src={y}
        style={{ height: "470px", width: "98%", marginTop: "1px" }}
        alt="Banner"
        className="banner-image"
      />
      <div className="search-containerhome">
        <form onSubmit={handleSearch} className="search-barhome">
          <select
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="search-inputhome"
          >
            <option value="">Search by location</option>
            {uniqueLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <div className="budget-selection">
            <label htmlFor="budget">Budget:</label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="dropdown-select"
            >
              <option value="all">All properties</option>
              <option value="below10k">Below 10k</option>
              <option value="10k-20k">10k - 20k</option>
              <option value="20k-30k">20k - 30k</option>
              <option value="30k-40k">30k - 40k</option>
              <option value="40k-50k">40k - 50k</option>
              <option value="50k-60k">50k - 60k</option>
              <option value="60k-above">60k and above</option>
            </select>
          </div>

          <div className="gender-selection">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="all">All Genders</option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select>
          </div>
          <div className="house-type-selection">
            <label htmlFor="houseType">Accomodation</label>
            <select
              id="houseType"
              value={houseType}
              onChange={(e) => setHouseType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="pg">PG</option>
              <option value="hostel">Hostel</option>
            </select>
          </div>
        </form>
      </div>
      <div className="home-page">
        <div className="property-list">
          {sortedData.length > 0 ? (
            sortedData.map((item) => (
              <div
                className="property-card"
                key={item.id}
                onClick={() => handleViewDetails(item.id)}
              >
                <div className="image-container">
                  <img
                    src={item.images[0]}
                    alt={`Property ${item.id} Image`}
                    className="property-image"
                  />
                </div>
                <h2 className="h2title">
                  {item.name}, {item.gender}
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "darkblue",
                  }}
                >
                  <FaLocationDot
                    style={{ color: "#132F40", fontWeight: "bolder" }}
                  />
                  <h3
                    className="locationkochedo"
                    style={{
                      margin: "0",
                      marginRight: "5px",
                      color: "#D9A86C",
                      fontWeight: "bolder",
                    }}
                  >
                    {item.location},{item.subloc}
                  </h3>
                </div>
                <p
                  className="starting-from-text"
                  style={{ fontWeight: "bolder", color: "black" }}
                >
                  Starting from{" "}
                </p>
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
                    <p
                      style={{
                        marginLeft: "5px",
                        marginRight: "10px",
                        color: "#132F40",
                        fontWeight: "bolder",
                      }}
                    >
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
                        fontSize: "20px",
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
                <div className="button-container">
                  <button
                    className="schedule-visit-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScheduleVisitClick(item);
                    }}
                  >
                    Schedule a Visit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2
              style={{
                color: "#132F40",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              No properties found for the selected location, Try for another
              location.
            </h2>
          )}
        </div>
      </div>
      <div className="footer">
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
            <option value="below20k">Below 20k</option>
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

      <Modal
        isOpen={showScheduleVisitModal}
        onRequestClose={() => setShowScheduleVisitModal(false)}
        contentLabel="Schedule Visit Modal"
        className="ReactModal__Content"
        shouldCloseOnOverlayClick={false} // Prevent closing on overlay click
        shouldCloseOnEsc={false} // Prevent closing on Esc key press
      >
        {/* Schedule Visit Modal Content */}
        <button
          className="modal-close"
          onClick={() => setShowScheduleVisitModal(false)}
        >
          &times;
        </button>

        <h3 style={{ color: "#132F40", fontWeight: "bolder" }}>
          <img
            style={{ marginRight: "30px" }}
            src={titlelogo}
            alt="Title Logo"
            className="title-logo"
          />
          Fill in Details
        </h3>
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
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your Name"
          required
        />

        <button
          style={{ backgroundColor: "#132F40", fontWeight: "bolder" }}
          onClick={handleScheduleVisitModalSubmit}
        >
          Submit
        </button>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Home;
