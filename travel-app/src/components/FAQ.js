import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is included in the package?", answer: "Accommodation, food, and guided safari tours." },
    { question: "Is it safe?", answer: "Yes, experienced guides ensure safety at all times." },
    { question: "What should I bring?", answer: "Binoculars, a camera, and comfortable clothing." }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
            <h4>{faq.question}</h4>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
