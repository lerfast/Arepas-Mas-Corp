// src/components/HomePage.js
import React, { useEffect } from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import ProductCarousel from './ProductCarousel';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    // Inicializamos AOS para las animaciones
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 10,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <AboutUs />
      <ProductCarousel />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default HomePage;
