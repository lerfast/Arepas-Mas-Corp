import React, { useContext, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos el hook para traducción

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

// Lista de productos en ambos idiomas
const productsData = {
  es: [
    {
      id: 1,
      name: 'Arepa Plain Grande',
      description: 'Paquete de 10 unidades - Producto prehorneado',
      pack: '10',
      price: 7.50,
      image: arepaPlainGrande,
    },
    {
      id: 2,
      name: 'Arepa Plain Pequeña',
      description: 'Paquete de 20 unidades - Producto prehorneado',
      pack: '20',
      price: 7.50,
      image: arepaPlainPequena,
    },
    {
      id: 3,
      name: 'Arepa de Choclo',
      description: 'Paquete de 5 unidades - Producto prehorneado',
      pack: '5',
      price: 7.50,
      image: arepaChocolo,
    },
    {
      id: 4,
      name: 'Arepa de Queso',
      description: 'Paquete de 5 unidades - Producto prehorneado',
      pack: '5',
      price: 8.00,
      image: arepaQueso,
    },
    {
      id: 5,
      name: 'Tequeño de Queso',
      description: 'Paquete de 10 unidades - Producto prehorneado',
      pack: '10',
      price: 11.00,
      image: deditosQueso,
    },
  ],
  en: [
    {
      id: 1,
      name: 'Large Plain Arepa',
      description: 'Pack of 10 units - Pre-baked product',
      pack: '10',
      price: 7.50,
      image: arepaPlainGrande,
    },
    {
      id: 2,
      name: 'Small Plain Arepa',
      description: 'Pack of 20 units - Pre-baked product',
      pack: '20',
      price: 7.50,
      image: arepaPlainPequena,
    },
    {
      id: 3,
      name: 'Choclo Arepa',
      description: 'Pack of 5 units - Pre-baked product',
      pack: '5',
      price: 7.50,
      image: arepaChocolo,
    },
    {
      id: 4,
      name: 'Cheese Arepa',
      description: 'Pack of 5 units - Pre-baked product',
      pack: '5',
      price: 8.00,
      image: arepaQueso,
    },
    {
      id: 5,
      name: 'Cheese Fingers',
      description: 'Pack of 10 units - Pre-baked product',
      pack: '10',
      price: 11.00,
      image: deditosQueso,
    },
  ],
};

const ProductCarousel = () => {
  const { t, i18n } = useTranslation(); // Hook de traducción
  const language = i18n.language; // Idioma actual
  const products = productsData[language] || productsData.es; // Carga los productos según el idioma actual
  const { addToCart, cart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    setConfirmationMessage(`${quantity} ${product.name} ${t('added_to_cart')}`);
    setTimeout(() => {
      setConfirmationMessage(null);
    }, 3000);
  };

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="products" className="carousel-container">
      {/* Agregamos un padding superior para ajustar el scroll */}
      <h2 style={{ paddingTop: '80px' }}>{t('products')}</h2>
      {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="pack">{t('pack')}: {product.pack}</span>
            <span className="price">{t('price')}: ${product.price.toFixed(2)}</span>

            <div className="quantity-selector">
              <label>{t('quantity')}:</label>
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              />
            </div>

            <button onClick={() => handleAddToCart(product, quantities[product.id] || 1)}>
              {t('add_to_cart')}
            </button>

            {cart.length > 0 && (
              <div className="proceed-checkout">
                <Link to="/checkout">
                  <button className="checkout-button">{t('proceed_to_checkout')}</button>
                </Link>
                <Link to="/cart">
                  <button className="view-cart-button">{t('view_cart')}</button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
