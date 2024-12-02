// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us" data-aos="fade-up">
      <div className="about-content">
        <div className="about-text">
          <h2 data-aos="fade-right">Sobre Nosotros</h2>
          <p data-aos="fade-left" data-aos-delay="100">
            En Arepas & Mas Corp, ofrecemos una variedad de alimentos colombianos de la más alta calidad.
            Nos dedicamos a traer los sabores auténticos de Colombia a cada mesa, con productos elaborados 
            con ingredientes frescos y tradicionales.
          </p>
          <a href="#contact" className="cta-button" data-aos="fade-up" data-aos-delay="200">Contáctanos</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
