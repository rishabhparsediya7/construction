import React from "react";
import "./App.css";
import HeroSection from "./components/home.tsx";
import ServicesSection from "./components/ServiceSection.tsx";
import Testimonials from "./components/Testimonials.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Footer from "./components/FooterSection.tsx";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
