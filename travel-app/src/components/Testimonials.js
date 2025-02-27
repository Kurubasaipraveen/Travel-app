import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Praveen", text: "A breathtaking experience! The big cats were stunning." },
    { name: "Pallavi", text: "The safari was well-organized and truly unforgettable!" },
    { name: "Varshith", text: "A must-visit for wildlife lovers!" }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Guests Say</h2>
      <div className="testimonials-container">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial">
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
