// src/components/TestimonialsSection.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción
import mujer1 from '../assets/mujer1.jpg';
import mujer2 from '../assets/mujer2.jpg';
import hombre from '../assets/hombre.jpg';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <section id="testimonials" className="testimonials-section" data-aos="fade-up">
      <h2 data-aos="zoom-in">{t('testimonials')}</h2>
      <div className="testimonials">
        <div className="testimonial" data-aos="flip-left" data-aos-delay="100">
          <img src={mujer1} alt="María Rodríguez" loading="lazy" />
          <p>{t('testimonial_1')}</p>
          <span>- {t('customer_1')}</span>
        </div>
        <div className="testimonial" data-aos="flip-left" data-aos-delay="200">
          <img src={hombre} alt="Juan Pérez" loading="lazy" />
          <p>{t('testimonial_2')}</p>
          <span>- {t('customer_2')}</span>
        </div>
        <div className="testimonial" data-aos="flip-left" data-aos-delay="300">
          <img src={mujer2} alt="Laura Gómez" loading="lazy" />
          <p>{t('testimonial_3')}</p>
          <span>- {t('customer_3')}</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
