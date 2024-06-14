import React, { useState } from "react";
import bg5 from "../images/bg5.jpeg";
import "./About.css";
import { FaAngleDown } from "react-icons/fa";
const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      <div className="text">
        <h1>CO-LIVING</h1>
        <h1 style={{ color: "#D9A86C" }}>FRIENDLY</h1>
        <h1 style={{ color: "#132F40" }}>ACCOMMODATIONS</h1>
        <div className="accordion">
          <Accordion
            title={
              <>
                <span style={{ color: "#D9A86C" }}>Verified</span> Living Spaces
                <FaAngleDown style={{ marginLeft: "270px" }} />
              </>
            }
            index={0}
            isActive={activeAccordion === 0}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title={
              <>
                <span style={{ color: "#D9A86C" }}>NO</span> BROKERAGES/FEES{" "}
                {/* <span style={{ color: "#D9A86C" }}>NO</span> FEES */}
                <FaAngleDown style={{ marginLeft: "270px" }} />
              </>
            }
            index={1}
            isActive={activeAccordion === 1}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title={
              <>
                <span style={{ color: "#D9A86C" }}>24x7</span> Student Support
                <FaAngleDown style={{ marginLeft: "273px" }} />
              </>
            }
            index={2}
            isActive={activeAccordion === 2}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>
      <div className="image">
        <img className="imgabout" src={bg5} alt="" />
      </div>
    </div>
  );
};

const Accordion = ({ title, index, isActive, toggleAccordion }) => {
  const accordionContent = {
    0: "Choose verified spaces only where you are comfortably home.",
    1: "No charges, No Brokerages. Enjoy hassle-free living with GG HOMES",
    2: "A dedicated support team for students 24/7. We offer counselling services for free.",
  };

  return (
    <div
      className={`accordion-item ${isActive ? "active" : ""}`}
      onClick={() => toggleAccordion(index)}
    >
      <h2 className="accordion-title">{title}</h2>
      {isActive && (
        <div className="accordion-content">
          <p>{accordionContent[index]}</p>
        </div>
      )}
    </div>
  );
};

export default About;
