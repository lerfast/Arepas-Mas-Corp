// src/components/Header.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import heroBackground from '../assets/hero-background.jpg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const { t, i18n } = useTranslation();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="app-header" style={{ backgroundImage: `url(${heroBackground})` }}>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Arepas & Más Corp" className="logo" />
          <p className="logo-subtitle">{t('far_but_not_flavors')}</p>
        </div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>{t('about_us')}</a></li>
          <li><a href="#products" onClick={closeMenu}>{t('products')}</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>{t('testimonials')}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t('contact_us')}</a></li>
          <li>
            <Link to="/cart" onClick={closeMenu}>
              {t('cart_title')} {itemCount > 0 && `(${itemCount})`}
            </Link>
          </li>
        </ul>
        <div className="language-switch">
          <button onClick={() => changeLanguage('es')}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div className="hero-content" data-aos="fade-down">
        <h1 data-aos="zoom-in" data-aos-delay="200">Arepas & Más Corp</h1>
        <p data-aos="fade-up" data-aos-delay="300">{t('welcome')}</p>
        <p className="sub-header" data-aos="fade-up" data-aos-delay="400">
          {t('corn_arepas')}
        </p>
        <a href="#products" className="cta-button" data-aos="zoom-in" data-aos-delay="500">{t('products')}</a>
      </div>
    </header>
  );
};

export default Header;
