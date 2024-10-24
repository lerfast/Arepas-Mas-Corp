// src/components/TestimonialsSection.js
import React from 'react';
import mujer1 from '../assets/mujer1.jpg';
import mujer2 from '../assets/mujer2.jpg';
import hombre from '../assets/hombre.jpg';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section" data-aos="fade-up">
      <h2 data-aos="zoom-in">Lo que dicen nuestros clientes</h2>
      <div className="testimonials">
        <div className="testimonial" data-aos="flip-left" data-aos-delay="100">
          <img src={mujer1} alt="María Rodríguez" loading="lazy" />
          <p>"Las arepas son deliciosas y me recuerdan a mi hogar en Colombia."</p>
          <span>- María Rodríguez</span>
        </div>
        <div className="testimonial" data-aos="flip-left" data-aos-delay="200">
          <img src={hombre} alt="Juan Pérez" loading="lazy" />
          <p>"Excelente calidad, especialmente los buñuelos y el pandeyuca."</p>
          <span>- Juan Pérez</span>
        </div>
        <div className="testimonial" data-aos="flip-left" data-aos-delay="300">
          <img src={mujer2} alt="Laura Gómez" loading="lazy" />
          <p>"Servicio rápido y productos frescos. Altamente recomendado."</p>
          <span>- Laura Gómez</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
