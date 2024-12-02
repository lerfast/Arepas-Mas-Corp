// src/components/Checkout.js
import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { CartContext } from '../context/CartContext';
import { useTranslation } from 'react-i18next'; // Importar hook de traducción
import './Checkout.css';

const Checkout = () => {
  const { t } = useTranslation(); // Hook de traducción
  const { cart, clearCart, getTotal } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setMessage(t('empty_cart_message'));
      return;
    }

    if (!formData.email || !formData.email.includes('@') || formData.email.includes(' ')) {
      setMessage(t('invalid_email_message'));
      return;
    }

    const orderDetails = cart
      .map((item) => `${t(`product_names.${item.id}`) || item.name} (${t('quantity')}: ${item.quantity})`)
      .join(', ');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      order: orderDetails,
      total: getTotal().toFixed(2),
    };

    emailjs
      .send(
        'service_k45d4h9',
        'template_5ec7k58',
        templateParams,
        'R5r9h5kY8r9zgVUJJ'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage(t('order_success_message'));
          clearCart();
        },
        (err) => {
          console.log('FAILED...', err);
          setMessage(t('order_failure_message'));
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="checkout-container" data-aos="fade-up">
      <h2>{t('checkout_title')}</h2>
      {message && <p className="message">{message}</p>}

      {cart.length === 0 ? (
        <p className="empty-cart">{t('empty_cart')}</p>
      ) : (
        <>
          <div className="order-summary">
            <h3>{t('order_summary')}</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {t(`product_names.${item.id}`) || item.name} - {t('quantity')}: {item.quantity} - {t('price')}: ${item.price.toFixed(2)} - {t('total')}: ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="order-total">
              <strong>{t('order_total')}: ${getTotal().toFixed(2)}</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label>{t('name')}:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('email')}:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('address')}:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('phone')}:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">{t('submit_order')}</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
