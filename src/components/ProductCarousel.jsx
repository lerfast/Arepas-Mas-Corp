import React, { useContext, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.css'; // Archivo de estilos del carrusel
import { CartContext } from '../context/CartContext'; // Importa el CartContext
import { Link } from 'react-router-dom';

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
    id: 1,
    name: 'Arepa Plain Grande',
    description: 'Paquete de 10 unidades - Producto prehorneado',
    pack: '10',
    price: 7.50,
    image: arepaPlainGrande
  },
  {
    id: 2,
    name: 'Arepa Plain Pequeña',
    description: 'Paquete de 20 unidades - Producto prehorneado',
    pack: '20',
    price: 7.50,
    image: arepaPlainPequena
  },
  {
    id: 3,
    name: 'Arepa de Chocolo',
    description: 'Paquete de 5 unidades - Producto prehorneado',
    pack: '5',
    price: 7.50,
    image: arepaChocolo
  },
  {
    id: 4,
    name: 'Arepa de Queso',
    description: 'Paquete de 5 unidades - Producto prehorneado',
    pack: '5',
    price: 8.00,
    image: arepaQueso
  },
  {
    id: 5,
    name: 'Tequeño de Queso',
    description: 'Paquete de 10 unidades - Producto prehorneado',
    pack: '10',
    price: 11.00,
    image: deditosQueso
  },
  {
    id: 6,
    name: 'Pandebono',
    description: 'Paquete de 10 unidades - Producto prehorneado',
    pack: '10',
    price: 11.00,
    image: pandebono
  },
  {
    id: 7,
    name: 'Chorizo',
    description: 'Paquete de 4 unidades - Producto Colombiano',
    pack: '4',
    price: 7.50,
    image: chorizo
  },
  {
    id: 8,
    name: 'Morcilla',
    description: 'Paquete de 4 unidades - Producto Colombiano',
    pack: '4',
    price: 7.50,
    image: morcilla
  },
  {
    id: 9,
    name: 'Pandeyuca',
    description: 'Paquete de 10 unidades - Producto Crudo',
    pack: '10',
    price: 12.00,
    image: pandeyuca
  },
  {
    id: 10,
    name: 'Buñuelos',
    description: 'Paquete de 20 unidades - Producto prehorneado',
    pack: '20',
    price: 25.00,
    image: bunuelos
  },
  {
    id: 11,
    name: 'Empanadas',
    description: 'Paquete de 25 unidades - Producto pre frito',
    pack: '25',
    price: 28.00,
    image: empanadas
  },
  {
    id: 12,
    name: 'Papas Criollas',
    description: 'Paquete de 2 libras - Producto pre frito',
    pack: '2 LBS',
    price: 7.00,
    image: papasCriollas
  }
];

const ProductCarousel = () => {
  const { addToCart, cart } = useContext(CartContext); // Usa el contexto del carrito
  const [quantities, setQuantities] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState(null); // Nuevo estado para el mensaje de confirmación

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    
    // Establecer el mensaje de confirmación y hacer que desaparezca después de 3 segundos
    setConfirmationMessage(`${quantity} ${product.name} añadido al carrito.`);
    setTimeout(() => {
      setConfirmationMessage(null); // Desaparecer mensaje
    }, 3000); // 3 segundos
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
      {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>} {/* Mostrar el mensaje */}

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="pack">Pack: {product.pack}</span>
            <span className="price">Precio: ${product.price.toFixed(2)}</span>

            {/* Input para seleccionar cantidad */}
            <div className="quantity-selector">
              <label>Cantidad:</label>
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              />
            </div>

            {/* Botón para añadir al carrito */}
            <button onClick={() => handleAddToCart(product, quantities[product.id] || 1)}>
              Añadir al Carrito
            </button>

            {/* Mostrar botones de checkout y ver carrito si hay productos en el carrito */}
            {cart.length > 0 && (
              <div className="proceed-checkout">
                <Link to="/checkout">
                  <button className="checkout-button">Proceder al Checkout</button>
                </Link>
                <Link to="/cart">
                  <button className="view-cart-button">Ver Carrito</button>
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
