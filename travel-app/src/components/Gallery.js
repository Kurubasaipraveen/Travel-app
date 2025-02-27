import React, { useState } from "react";
import "../styles/Gallery.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfHFWC-W5YtwuzleEBscPIHvLW25nXmWPQA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawiMuC08R6FvWQscBO0fcSSOeMpujIkGMjQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2HKn8wnzyXRBw1w2QRM8V1PtT7UPVy6c0w&s",
  'https://media.istockphoto.com/id/478924237/photo/african-lion-couple-and-safari-jeep.jpg?s=612x612&w=0&k=20&c=5_AFHVAd2GF2s51ZYtenE0NTKy5hiaofGjOtbjtHALI=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOh993Zs2dUrbfGTL73qcBZvkaD9REqnwHA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSTMcnUn7tPfy2KrM8KvgV7LsEXcpfmB8NA&s'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Safari" onClick={() => setSelectedImage(img)} />
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
