// import React from "react";
// import "./Beforelogin.css";

// const Beforelogin = ({ onExploreNow }) => {
//   return (
//     <div className="landing-page">
//       <div className="landing-header">
//         <h1>Welcome to our Hostel Booking Website</h1>
//         <p>Find the perfect stay for your College adventure</p>
//       </div>
//       <div className="landing-features">
//         <div className="feature">
//           <h2>Wide Selection</h2>
//           <p>Choose from a variety of hostels and guesthouses</p>
//         </div>
//         <div className="feature">
//           <h2>Easy Booking</h2>
//           <p>Book your stay hassle-free with our intuitive booking system</p>
//         </div>
//         <div className="feature">
//           <h2>Best Prices</h2>
//           <p>Get the best deals on accommodation for your budget</p>
//         </div>
//       </div>
//       <div className="cta">
//         <button className="explore-button" onClick={onExploreNow}>
//           Explore Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Beforelogin;

import React from "react";
import "./Beforelogin.css";

const Beforelogin = ({ onExploreNow }) => {
  return (
    <div className="landing-page">
      {/* Hero Section with Background Image and Text */}
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1586214601498-4dbcfd0bf2c8?q=80&w=1000&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hostel Booking Website Hero Image"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to our Hostel Booking Website</h1>
          <p>Find the perfect stay for your College adventure</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="landing-features">
        <div className="feature">
          <h2>Wide Selection</h2>
          <p>Choose from a variety of hostels and guesthouses</p>
        </div>
        <div className="feature">
          <h2>Easy Booking</h2>
          <p>Book your stay hassle-free with our intuitive booking system</p>
        </div>
        <div className="feature">
          <h2>Best Prices</h2>
          <p>Get the best deals on accommodation for your budget</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta"></div>
    </div>
  );
};

export default Beforelogin;
