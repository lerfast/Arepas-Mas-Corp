// src/components/AboutUs.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos el hook para traducción
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <section id="about" className="about-us">
      <div className="about-content">
        <div className="about-text">
          <h2 data-aos="fade-right">{t('about_us')}</h2>
          <p data-aos="fade-left" data-aos-delay="100">{t('about_description')}</p>
          <a href="#contact" className="cta-button" data-aos="fade-up" data-aos-delay="200">
            {t('contact_us')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
