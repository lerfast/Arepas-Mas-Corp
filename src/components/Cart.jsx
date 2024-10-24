// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, updateQuantity, getTotal, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <i className="fas fa-shopping-cart empty-icon"></i>
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <div className="quantity-edit">
                <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
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
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <h3>Total: ${getTotal().toFixed(2)}</h3>
      </div>

      <div className="cart-actions">
        <button className="clear-cart-button" onClick={clearCart}>Vaciar el Carrito</button>
        <Link to="/checkout">
          <button className="checkout-button">Proceder con el Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
