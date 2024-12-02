// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Hook para traducción
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <footer id="contact" className="contact-section" data-aos="fade-up">
      <h2>{t('contact_us')}</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        {t('contact_message')} 
        <a
          href="https://wa.me/17865437061"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
          aria-label={t('contact_via_whatsapp')}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
        <strong>+1(786)-543-7061</strong>
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        {t('contact_closing')} <br />
        {t('developed_by')} <strong></strong>. <br />
        {t('contact_follow_up')}
        <a href="https://wa.me/573187757620" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp-link">
          <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp-icon" />
        </a>
        <a href="https://www.linkedin.com/in/luisemiliorojas/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin-link">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
        </a>
        <a href="https://github.com/lerfast" target="_blank" rel="noopener noreferrer" className="icon-link github-link">
          <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
        </a>
      </p>

      <div className="social-media" data-aos="fade-up" data-aos-delay="400">
        <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://x.com" className="social-icon" aria-label="X (anteriormente Twitter)">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>

      {/* Contador de visitas */}
      <div className="visit-counter">
        <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://hitwebcounter.com/counter/counter.php?page=17014722&style=0038&nbdigits=9&type=page&initCount=0"
            title="Counter Widget"
            alt={t('visit_counter_alt')}
            border="0"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
