import React from "react";
import "../styles/Home.css";

const Hero = ({ onBookNow }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Big Cats Week at Kenya Safari</h1>
        <p>Experience the thrill of the wild with our exclusive safari tour.</p>
        <button className="btn" onClick={onBookNow}>Book Now</button>
      </div>
    </section>
  );
};

export default Hero;
