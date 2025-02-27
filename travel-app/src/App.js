import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Itinerary from "./components/Itinerary";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import BookingPopup from "./components/BookingPopup";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home onBookNow={() => setIsBookingOpen(true)} />
      <Overview />
      <Itinerary />
      <Testimonials />
      <Gallery />
      <FAQ />
      {isBookingOpen && <BookingPopup onClose={() => setIsBookingOpen(false)} />}
      <Footer />
    </div>
  );
};

export default App;
