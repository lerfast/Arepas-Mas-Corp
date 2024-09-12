import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { CartContext } from '../context/CartContext';
import './Checkout.css'; // Asegúrate de tener un archivo CSS para los estilos

const Checkout = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext); // Usamos getTotal para obtener el total
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
      setMessage('El carrito está vacío.');
      return;
    }
  
    // Debug: Verifica si el email es válido antes de enviar
    if (!formData.email || !formData.email.includes('@') || formData.email.includes(' ')) {
      setMessage('El correo electrónico es inválido.');
      return;
    }

    // Debug: Log para verificar el correo electrónico antes de enviar el correo
    console.log("Sending email to:", formData.email);  // Esto te mostrará el correo que está siendo enviado en la consola del navegador
  
    const orderDetails = cart
      .map((item) => `${item.name} (Cantidad: ${item.quantity})`)
      .join(', ');
  
    const templateParams = {
      name: formData.name,
      email: formData.email,  // Asegúrate de que estás enviando el email del cliente
      address: formData.address,
      phone: formData.phone,
      order: orderDetails,
      total: getTotal().toFixed(2),  // Envía el total del pedido también
    };
  
    emailjs
      .send(
        'service_k45d4h9', // Service ID
        'template_5ec7k58', // Template ID
        templateParams,
        'R5r9h5kY8r9zgVUJJ' // Public Key (User ID)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage('Pedido enviado exitosamente.');
          clearCart();
        },
        (err) => {
          console.log('FAILED...', err);
          setMessage('Error al enviar el pedido.');
        }
      );
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="checkout-container" data-aos="fade-up">
      <h2>Checkout</h2>
      {message && <p className="message">{message}</p>}
      
      {cart.length === 0 ? (
        <p className="empty-cart">No hay productos en el carrito</p>
      ) : (
        <>
          <div className="order-summary">
            <h3>Resumen del Pedido</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - Cantidad: {item.quantity} - Precio Unitario: ${item.price.toFixed(2)} - Total: ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="order-total">
              <strong>Total del pedido: ${getTotal().toFixed(2)}</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Correo electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Dirección:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Enviar Pedido</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
