const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      cart,
      ...checkoutInfo
    };
  
    // Envía los datos del pedido al servidor
    fetch('http://localhost:5001/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text); });
        }
        return response.json();
      })
      .then(data => {
        alert('Pedido realizado con éxito!');
        setCart([]); // Vacía el carrito después de realizar el pedido
        setIsCheckout(false); // Cierra el formulario de checkout
      })
      .catch(error => {
        console.error('Error en el pedido:', error);
        alert('Hubo un error al realizar el pedido');
      });
  };
  