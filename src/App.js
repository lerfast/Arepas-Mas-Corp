import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCarousel from './components/ProductCarousel';
import logo from './assets/logo.png'; // Importa el logo
import heroBackground from './assets/hero-background.jpg'; // Imagen de fondo para el header

// Importa las imágenes de los clientes
import mujer1 from './assets/mujer1.jpg';
import mujer2 from './assets/mujer2.jpg';
import hombre from './assets/hombre.jpg';

// Importa la librería AOS para las animaciones
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function App() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Inicializa AOS para las animaciones al hacer scroll
  useEffect(() => {
    AOS.init({
      duration: 600,  // Duración de la animación más rápida para mejorar rendimiento
      easing: 'ease-in-out',  // Suavidad en las animaciones
      once: true,  // Ejecutar la animación solo una vez para evitar sobrecarga
      offset: 10,  // Distancia antes de que se active la animación
    });
  }, []);

  // Función para alternar el menú
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* HEADER CON IMAGEN DE FONDO Y MENÚ */}
      <header className="app-header" style={{ backgroundImage: `url(${heroBackground})` }}>
        <nav className="navbar">
          <img src={logo} alt="Arepas & Mas Corp" className="logo" />
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}> {/* Clase dinámica para el menú hamburguesa */}
            <li><a href="#about" onClick={toggleMenu}>Sobre Nosotros</a></li>
            <li><a href="#products" onClick={toggleMenu}>Productos</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Testimonios</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
          </ul>
          {/* Icono de hamburguesa para móvil */}
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

      {/* SECCIÓN DE SOBRE NOSOTROS */}
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

      {/* SECCIÓN DE PRODUCTOS CON CARRUSEL */}
      <section id="products" className="products-section" data-aos="fade-up">
        <ProductCarousel />
      </section>

      {/* SECCIÓN DE TESTIMONIOS */}
      <section id="testimonials" className="testimonials-section" data-aos="fade-up">
        <h2 data-aos="zoom-in">Lo que dicen nuestros clientes</h2>
        <div className="testimonials">
          <div className="testimonial" data-aos="flip-left" data-aos-delay="100">
            <img src={mujer1} alt="María Rodríguez" />
            <p>"Las arepas son deliciosas y me recuerdan a mi hogar en Colombia."</p>
            <span>- María Rodríguez</span>
          </div>
          <div className="testimonial" data-aos="flip-left" data-aos-delay="200">
            <img src={hombre} alt="Juan Pérez" />
            <p>"Excelente calidad, especialmente los buñuelos y el pandeyuca."</p>
            <span>- Juan Pérez</span>
          </div>
          <div className="testimonial" data-aos="flip-left" data-aos-delay="300">
            <img src={mujer2} alt="Laura Gómez" />
            <p>"Servicio rápido y productos frescos. Altamente recomendado."</p>
            <span>- Laura Gómez</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <footer id="contact" className="contact-section" data-aos="fade-up">
        <h2>Contacto</h2>
        <p data-aos="fade-up" data-aos-delay="100">Para pedidos, puedes comunicarte al: <strong>+1(786)-543-7061</strong></p>
        <p data-aos="fade-up" data-aos-delay="200">Gracias por preferirnos. ¡Esperamos llevar los sabores de Colombia hasta ti!</p>
        <div className="social-media" data-aos="fade-up" data-aos-delay="300">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#instagram" className="social-icon">Instagram</a>
          <a href="#twitter" className="social-icon">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
