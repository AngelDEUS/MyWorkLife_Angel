import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className={`gallery-item item-${index + 1}`}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
