import React, { useEffect, useState } from "react";
import "./clientsserved.css";

const Clientsserved = () => {
  // State variables to track the values for each metric
  const [totalProperties, setTotalProperties] = useState(0);
  const [studentsServed, setStudentsServed] = useState(0);
  const [happyFaces, setHappyFaces] = useState(0);

  // Function to animate the metrics from 0 to the desired values
  useEffect(() => {
    const totalPropertiesInterval = setInterval(() => {
      if (totalProperties < 10) {
        setTotalProperties((prevValue) => prevValue + 1);
      }
    }, 100); // Adjust the interval speed as needed

    const studentsServedInterval = setInterval(() => {
      if (studentsServed < 25) {
        setStudentsServed((prevValue) => prevValue + 1);
      }
    }, 100);

    const happyFacesInterval = setInterval(() => {
      if (happyFaces < 25) {
        setHappyFaces((prevValue) => prevValue + 1);
      }
    }, 100);

    // Clear intervals when values reach the desired numbers
    return () => {
      clearInterval(totalPropertiesInterval);
      clearInterval(studentsServedInterval);
      clearInterval(happyFacesInterval);
    };
  }, [totalProperties, studentsServed, happyFaces]); // useEffect will run whenever these values change

  return (
    <div className="metric-container">
      {" "}
      {/* Wrap the boxes in a container */}
      <div className="metric-box">
        <h2>Total Properties</h2>
        <p>{totalProperties}</p>
      </div>
      <div className="metric-box">
        <h2>Students Served</h2>
        <p>{studentsServed}</p>
      </div>
      <div className="metric-box">
        <h2>Happy Faces</h2>
        <p>{happyFaces}</p>
      </div>
    </div>
  );
};

export default Clientsserved;
