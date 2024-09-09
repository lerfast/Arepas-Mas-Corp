import React from 'react';
import './App.css';
import ProductCarousel from './components/ProductCarousel';
import logo from './assets/logo.png'; // Importa el logo
import heroBackground from './assets/hero-background.jpg'; // Imagen de fondo para el header

// Importa las imágenes de los clientes
import mujer1 from './assets/mujer1.jpg';
import mujer2 from './assets/mujer2.jpg';
import hombre from './assets/hombre.jpg';

function App() {
  return (
    <div className="App">
      {/* HEADER CON IMAGEN DE FONDO Y MENÚ */}
      <header className="app-header" style={{ backgroundImage: `url(${heroBackground})` }}>
        <nav className="navbar">
          <img src={logo} alt="Arepas & Mas Corp" className="logo" />
          <ul className="menu">
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Arepas & Mas Corp</h1>
          <p>Auténticos sabores colombianos directo a tu mesa</p>
          <a href="#products" className="cta-button">Explorar Productos</a>
        </div>
      </header>

      {/* SECCIÓN DE SOBRE NOSOTROS */}
      <section id="about" className="about-us">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Nosotros</h2>
            <p>
              En Arepas & Mas Corp, ofrecemos una variedad de alimentos colombianos de la más alta calidad.
              Nos dedicamos a traer los sabores auténticos de Colombia a cada mesa, con productos elaborados 
              con ingredientes frescos y tradicionales.
            </p>
            <a href="#contact" className="cta-button">Contáctanos</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PRODUCTOS CON CARRUSEL */}
      <section id="products" className="products-section">
        <ProductCarousel />
      </section>

      {/* SECCIÓN DE TESTIMONIOS */}
      <section id="testimonials" className="testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src={mujer1} alt="María Rodríguez" />
            <p>"Las arepas son deliciosas y me recuerdan a mi hogar en Colombia."</p>
            <span>- María Rodríguez</span>
          </div>
          <div className="testimonial">
            <img src={hombre} alt="Juan Pérez" />
            <p>"Excelente calidad, especialmente los buñuelos y el pandeyuca."</p>
            <span>- Juan Pérez</span>
          </div>
          <div className="testimonial">
            <img src={mujer2} alt="Laura Gómez" />
            <p>"Servicio rápido y productos frescos. Altamente recomendado."</p>
            <span>- Laura Gómez</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <footer id="contact" className="contact-section">
        <h2>Contacto</h2>
        <p>Para pedidos, llame al: <strong>+1(786)-543-7061</strong></p>
        <p>Gracias por preferirnos. ¡Esperamos llevar los sabores de Colombia hasta ti!</p>
        <div className="social-media">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#instagram" className="social-icon">Instagram</a>
          <a href="#twitter" className="social-icon">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
