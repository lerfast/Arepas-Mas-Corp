// src/components/Header.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta
import heroBackground from '../assets/hero-background.jpg'; // Asegúrate de que la ruta sea correcta
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="app-header" style={{ backgroundImage: `url(${heroBackground})` }}>
      <nav className="navbar">
        <img src={logo} alt="Arepas & Mas Corp" className="logo" />
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>Sobre Nosotros</a></li>
          <li><a href="#products" onClick={closeMenu}>Productos</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonios</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          <li>
            <Link to="/cart" onClick={closeMenu}>
              Carrito {itemCount > 0 && `(${itemCount})`}
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div className="hero-content" data-aos="fade-down">
        <h1 data-aos="zoom-in" data-aos-delay="200">Arepas & Mas Corp</h1>
        <p data-aos="fade-up" data-aos-delay="300">Auténticos sabores colombianos directo a tu mesa</p>
        <a href="#products" className="cta-button" data-aos="zoom-in" data-aos-delay="400">Explorar Productos</a>
      </div>
    </header>
  );
};

export default Header;
