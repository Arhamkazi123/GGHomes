import React, { useEffect, useState } from "react";
import "./clientsserved.css";

const Clientsserved = () => {
  const [totalProperties, setTotalProperties] = useState(0);
  const [studentsServed, setStudentsServed] = useState(0);
  const [happyFaces, setHappyFaces] = useState(0);

  useEffect(() => {
    const totalPropertiesInterval = setInterval(() => {
      if (totalProperties < 10) {
        setTotalProperties((prevValue) => prevValue + 1);
      }
    }, 100);

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

    return () => {
      clearInterval(totalPropertiesInterval);
      clearInterval(studentsServedInterval);
      clearInterval(happyFacesInterval);
    };
  }, [totalProperties, studentsServed, happyFaces]);
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
