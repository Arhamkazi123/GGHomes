import React, { useState } from "react";
import "./Imageslider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleFullscreen = () => {
    setFullscreen((prevState) => !prevState);
  };

  const handleClose = () => {
    setFullscreen(false);
  };

  return (
    <div className={`image-slider ${fullscreen ? "fullscreen" : ""}`}>
      {fullscreen && (
        <div className="fullscreen-overlay">
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      )}
      {!fullscreen && (
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          onClick={toggleFullscreen}
        />
      )}
      {!fullscreen && (
        <>
          <button className="slider-btn prev-btn" onClick={goToPrevSlide}>
            &lt;
          </button>
          <button className="slider-btn next-btn" onClick={goToNextSlide}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
