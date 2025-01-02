import React from "react";
import "./styles/HeroSection.css";
import logo from "../images/logo-wb.png";
import useTypewriter from "../hooks/useTypeWriter.tsx";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  const heroText = "Welcome to Diamond Enterprises";
  return (
    <section className="hero-section">
      <div className="transparent-header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="hero-content">
        <h1>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString(heroText)
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })

                .start();
            }}
            options={{ loop: true }}
          />
        </h1>
        <p>Your construction journey starts from here.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
