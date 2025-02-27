import React, { useState } from "react";
import "../styles/BookingPopup.css";

const BookingPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    adults: 1,
    children: 0,
  });

  const [totalPrice, setTotalPrice] = useState(1582); 

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    // If it's a number input, parse it to an integer, else use the raw value
    const updatedValue = type === "number" ? Math.max(0, parseInt(value) || 0) : value;
  
    setFormData({ ...formData, [name]: updatedValue });
  
    // Price Calculation (Only recalculate when numbers change)
    if (name === "adults" || name === "children") {
      const baseAdultPrice = 1582;
      const discountAdultPrice = 1322;
      const baseChildPrice = 1400;
      const discountChildPrice = 1127;
      const isDiscount = new Date() <= new Date("2023-08-14");
  
      const newAdults = name === "adults" ? updatedValue : formData.adults;
      const newChildren = name === "children" ? updatedValue : formData.children;
  
      const total =
        newAdults * (isDiscount ? discountAdultPrice : baseAdultPrice) +
        newChildren * (isDiscount ? discountChildPrice : baseChildPrice);
  
      setTotalPrice(total);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && (formData.adults > 0 || formData.children > 0)) {
      alert(`Booking confirmed! Total Amount: USD ${totalPrice}`);
      onClose();
    } else {
      alert("Please fill in all fields and ensure at least one passenger.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Book Your Safari</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <h4>Adult <input type="number" name="adults" min="1" placeholder="Number of Adults" value={formData.adults} onChange={handleChange} required /></h4>
          <h4>Child<input type="number" name="children" min="0" placeholder="Number of Children (4-9 years)" value={formData.children} onChange={handleChange} /></h4>
          <p className="price">Total Price: <strong>USD {totalPrice}</strong></p>
          <button className="btn" type="submit">Confirm Booking</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingPopup;
