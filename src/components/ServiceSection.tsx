import React from "react";
import "./styles/ServicesSection.css";
import {
  FaTools,
  FaCalculator,
  FaDraftingCompass,
  FaMap,
  FaReceipt,
} from "react-icons/fa";

const services = [
  {
    name: "Construction & Supervision",
    description:
      "30+ years of experience in construction of buildings and multistorey.",
    icon: <FaTools />,
  },
  {
    name: "Estimating & Budgeting",
    description: "30+ years of experience in estimating the budget.",
    icon: <FaCalculator />,
  },
  {
    name: "Planning & Designing",
    description: "30+ years of experience in Planning and Designing.",
    icon: <FaDraftingCompass />,
  },
  {
    name: "2D & 3D Maps",
    description: "Design 2D and 3D maps via computer.",
    icon: <FaMap />,
  },
  {
    name: "Billing & Maintenance",
    description: "Lifetime Maintenance of construction.",
    icon: <FaReceipt />,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
