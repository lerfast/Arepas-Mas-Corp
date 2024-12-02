// src/components/Cart.js
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook de traducción
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { t } = useTranslation(); // Hook de traducción
  const { cart, clearCart, updateQuantity, getTotal, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <i className="fas fa-shopping-cart empty-icon"></i>
        <p>{t('empty_cart')}</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>{t('cart_title')}</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="item-info">
              {/* Usar traducción dinámica para el nombre del producto */}
              <span className="item-name">{t(`product_names.${item.id}`)}</span>
              <div className="quantity-edit">
                <label htmlFor={`quantity-${item.id}`}>{t('quantity')}:</label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                {t('remove')}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <h3>
          {t('total')}: ${getTotal().toFixed(2)}
        </h3>
      </div>

      <div className="cart-actions">
        <button className="clear-cart-button" onClick={clearCart}>
          {t('clear_cart')}
        </button>
        <Link to="/checkout">
          <button className="checkout-button">{t('proceed_to_checkout')}</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
