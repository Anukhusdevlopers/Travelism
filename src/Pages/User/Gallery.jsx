import React, { useState } from "react";
import "./Gallery.css";


import imgBanner1 from '../../assets/PopupStart.jpg'
import imgBanner2 from '../../assets/gallery2.jpg'
import img1 from '../../assets/IMG-20250306-WA0009.jpg'
import img2 from '../../assets/IMG-20250306-WA0012.jpg'
import img3 from '../../assets/IMG-20250306-WA0014.jpg'
import img4 from '../../assets/IMG-20250306-WA0015.jpg'
import img5 from '../../assets/IMG-20250306-WA0016.jpg'
import img6 from '../../assets/IMG-20250306-WA0017.jpg'
import img7 from '../../assets/IMG-20250306-WA0010.jpg'
import img8 from '../../assets/IMG-20250306-WA0011.jpg'
import img9 from '../../assets/IMG-20250306-WA0013.jpg'
import img10 from '../../assets/IMG-20250306-WA0018.jpg'
import img11 from '../../assets/IMG-20250306-WA0019.jpg'

const images = [
 imgBanner1,imgBanner2, img1,img2,img3,img4,img5,img6,img7,,img8,img9,img10,img11
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2>Explore Beautiful Destinations</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Travel Destination"
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
