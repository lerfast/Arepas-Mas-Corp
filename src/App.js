import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductCarousel from './components/ProductCarousel';
import Cart from './components/Cart'; // Importa el componente del carrito
import Checkout from './components/Checkout'; // Importa el componente de checkout
import logo from './assets/logo.png'; // Importa el logo
import heroBackground from './assets/hero-background.jpg'; // Imagen de fondo para el header
import { CartProvider, CartContext } from './context/CartContext'; // Importa CartContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';  // Íconos de redes sociales

// Importa las imágenes de los clientes
import mujer1 from './assets/mujer1.jpg';
import mujer2 from './assets/mujer2.jpg';
import hombre from './assets/hombre.jpg';

// Importa la librería AOS para las animaciones
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 10,
    });
    AOS.refresh();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Asegura que el menú se cierre
  };

  const HomePage = () => (
    <>
      {/* HEADER CON IMAGEN DE FONDO Y MENÚ */}
      <Header />
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
    </>
  );

  const Header = () => {
    const { cart } = useContext(CartContext); // Accede al contexto del carrito
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0); // Calcula el total de items

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

  return (
    <CartProvider>
      <Router basename="/arepas-mas-corp">
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          {/* SECCIÓN DE CONTACTO */}
          <footer id="contact" className="contact-section" data-aos="fade-up">
            <h2>Contacto</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Para pedidos, también puedes comunicarte al: 
              <a
                href="https://wa.me/17865437061"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
                aria-label="Contacta vía WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /> {/* Ícono de WhatsApp */}
              </a>
              <strong>+1(786)-543-7061</strong> {/* Número de teléfono */}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Gracias por preferirnos. ¡Esperamos llevar los sabores de Colombia para ti o tu negocio!
            </p>

            {/* Párrafo adicional de promoción personal */}
            <p data-aos="fade-up" data-aos-delay="300" style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '1rem' }}>
              Sitio Web desarrollado por <strong>Luis Emilio Rojas</strong>. Contáctame tocando el ícono para crear tu sitio web: 
              <a href="https://wa.me/573187757620" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /> 
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
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
