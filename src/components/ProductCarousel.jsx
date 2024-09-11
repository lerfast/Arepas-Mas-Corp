import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.css'; // Archivo de estilos del carrusel

// Importa las imágenes de los productos
import arepaPlainGrande from '../assets/arepa_plain_grande.jpg';
import arepaPlainPequena from '../assets/arepa_plain_pequena.jpg';
import arepaChocolo from '../assets/arepa_chocolo.jpg';
import arepaQueso from '../assets/arepa_queso.jpg';
import deditosQueso from '../assets/deditos_queso.jpg';
import pandebono from '../assets/pandebono.jpg';
import chorizo from '../assets/chorizo.jpg';
import morcilla from '../assets/morcilla.jpg';
import pandeyuca from '../assets/pandeyuca.jpg';
import bunuelos from '../assets/bunuelos.jpg';
import empanadas from '../assets/empanadas.jpg';
import papasCriollas from '../assets/papas_criollas.jpg';

// Lista de productos con su información
const products = [
  {
    name: 'Arepa Plain Grande',
    description: 'Paquete de 10 unidades - Producto prehorneado',
    pack: '10',
    price: '$7.50',
    image: arepaPlainGrande
  },
  {
    name: 'Arepa Plain Pequeña',
    description: 'Paquete de 20 unidades - Producto prehorneado',
    pack: '20',
    price: '$7.50',
    image: arepaPlainPequena
  },
  {
    name: 'Arepa de Chocolo',
    description: 'Paquete de 5 unidades - Producto prehorneado',
    pack: '5',
    price: '$7.50',
    image: arepaChocolo
  },
  {
    name: 'Arepa de Queso',
    description: 'Paquete de 5 unidades - Producto prehorneado',
    pack: '5',
    price: '$8.00',
    image: arepaQueso
  },
  {
    name: 'Tequeño de Queso',
    description: 'Paquete de 10 unidades - Producto prehorneado',
    pack: '10',
    price: '$11.00',
    image: deditosQueso
  },
  {
    name: 'Pandebono',
    description: 'Paquete de 10 unidades - Producto prehorneado',
    pack: '10',
    price: '$11.00',
    image: pandebono
  },
  {
    name: 'Chorizo',
    description: 'Paquete de 4 unidades - Producto Colombiano',
    pack: '4',
    price: '$7.50',
    image: chorizo
  },
  {
    name: 'Morcilla',
    description: 'Paquete de 4 unidades - Producto Colombiano',
    pack: '4',
    price: '$7.50',
    image: morcilla
  },
  {
    name: 'Pandeyuca',
    description: 'Paquete de 10 unidades - Producto Crudo',
    pack: '10',
    price: '$12.00',
    image: pandeyuca
  },
  {
    name: 'Buñuelos',
    description: 'Paquete de 20 unidades - Producto prehorneado',
    pack: '20',
    price: '$25.00',
    image: bunuelos
  },
  {
    name: 'Empanadas',
    description: 'Paquete de 25 unidades - Producto pre frito',
    pack: '25',
    price: '$28.00',
    image: empanadas
  },
  {
    name: 'Papas Criollas',
    description: 'Paquete de 2 libras - Producto pre frito',
    pack: '2 LBS',
    price: '$7.00',
    image: papasCriollas
  }
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2>Nuestros Productos</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="pack">Pack: {product.pack}</span>
            <span className="price">Precio: {product.price}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
