import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Testimonials.css";

const testimonials = [
  {
    content:
      "I wanted to thank you again for making our downtown Diamond Enterprises project such a great success. This was our first renovation in our new prototype, so there was a lot riding on it, and you and your team made it a real pleasure. The most impressive thing to me was when your team came across a challenge; they always came to me with a viable solution. From the start to the finish, it went very smoothly. I was also impressed with the professionalism of you and your team. I look forward to working with you and your team again in the future.",
    from: "Shelley Knaeble",
  },
  {
    content:
      "I have found Diamond Enterprises to be a responsible, organized, and timely contractor that works proactively to resolve potential issues before they occur. In my experience, they have always conducted themselves with the highest level of integrity. I would absolutely recommend them for public works or private projects involving K-12 schools.",
    from: "SP Singh",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through testimonials
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time each slide stays (3000ms = 3 seconds)
    pauseOnHover: true, // Pause autoplay when the user hovers over a slide
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="content">"{testimonial.content}"</p>
            <p className="from">— {testimonial.from}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
