import React, { useState } from "react";
import "./styles/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-header">
        <div className="contact-info">
          <div>
            <h2>Contact Us</h2>
            <p>
              Feel free to reach out to us via the form or the contact details
              below.
            </p>
          </div>
          <div className="contact-details">
            <a>Phone: +91-8359870125</a>
            <a href="mailto:engpramod80@gmail.com">
              Email: engpramod80@gmail.com
            </a>
            <a>Location: Dholi Bua Ka Pul, Lashkar, Gwalior</a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us A Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnxyz@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
