import React from "react";
import "../styles/Itinerary.css";

const Itinerary = () => {
  return (
    <section className="itinerary">
      <h2>Itinerary</h2>

      <div className="day">
        <h3>Day 1: Nov 14th, 2023 - Arrival & Safari Introduction</h3>
        <p>
          Pickup from JKIA airport at 7 AM. Travel to Maasai Mara in a 4x4 Landcruiser,
          enjoying breathtaking landscapes en route. Witness Nairobi National Park,
          spot wildlife, and experience the Great Rift Valley’s stunning views.
          After check-in and lunch, embark on your first thrilling game drive.
        </p>
      </div>

      <div className="day">
        <h3>Day 2: Nov 15th - Game Drive & Big Cat Tracking</h3>
        <p>
          Early morning game drive with packed breakfast, witnessing a spectacular sunrise. 
          Spot lions, cheetahs, and newborn Topis. Enjoy a bush breakfast amidst nature. 
          Afternoon drive focuses on tracking elusive leopards.
        </p>
      </div>

      <div className="day">
        <h3>Day 3: Nov 16th - Full-Day Safari to Sand River</h3>
        <p>
          A full-day adventure towards Maasai Mara’s border, spotting migratory animals.
          Enjoy packed meals while watching wildlife in their natural habitat. A chance 
          to witness the Big 5, including the elusive Rhino.
        </p>
      </div>

      <div className="day">
        <h3>Day 4: Nov 17th - Departure</h3>
        <p>
          After breakfast, share experiences with fellow travelers before heading back to Nairobi. 
          Drop-off at JKIA airport. End of an unforgettable journey.
        </p>
      </div>

      <div className="pricing">
        <h3>Pricing</h3>
        <ul>
          <li><strong>Adult (Ex Nairobi):</strong> USD 1582 (incl. taxes)</li>
          <li><strong>Child (4-9 years, Ex Nairobi):</strong> USD 1400 (incl. taxes)</li>
          <li className="offer"><strong>Independence Day Offer (Book before Aug 14th, 2025):</strong></li>
          <li className="discount">Adult: USD 1322 | Child: USD 1127</li>
        </ul>
      </div>

      {/* Terms & Conditions Section */}
      <div className="terms">
        <h3>Terms and Conditions</h3>
        <ul>
          <li>Costs are based on 4 pax per vehicle for game drives and 5 per vehicle for internal transfers.</li>
          <li>Stay at Mara would be at Zebra Plains, Loyk Camp, or Julia River Camp.</li>
          <li>Last day to confirm the tour is <strong>August 14th, 2023</strong>.</li>
          <li>Guests must have valid passports with at least 6 months validity from the return date.</li>
          <li>Yellow Fever & Oral Polio vaccinations are required at least 15 days before travel.</li>
          <li>Guests must share vaccination certificates for VISA invite letter processing.</li>
          <li>Any medical ailment should be informed in advance; the tour operator is not liable for any loss or damage.</li>
          <li>International travel insurance is required 15 days prior to travel.</li>
          <li>Guests staying in Nairobi before travel must reach JKIA airport at 7 AM on Nov 14th.</li>
          <li>Guests staying in Nairobi on Nov 17th must arrange their own transport from JKIA airport.</li>
          <li>Lunch on return (Nov 17th) is not included in the package.</li>
          <li>Groups above 5 can avail of special discounts.</li>
          <li>Vehicles are for internal transfers and game drives only—not for other purposes.</li>
        </ul>
      </div>
    </section>
  );
};

export default Itinerary;
