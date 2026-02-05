import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firestore";
import NavBar from "./NavBar";
import './CartContainer.css'

export default function CartContainer() {
  const {
    cart,
    countTotalPrice,
    clearCart,
    removeItemFromCart
  } = useContext(cartContext);

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleCheckOut(event) {
    event.preventDefault();

    const buyOrder = {
      buyer: formData,
      items: cart,
      total: countTotalPrice(),
      date: new Date()
    };

    await createBuyOrder(buyOrder);
    clearCart();
  }

  function handleReset() {
    setFormData({
      username: "",
      phone: "",
      email: "",
    });
  }

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  

  return (
    <div className="cart-container">
  <h2 className="cart-title">Tu carrito de compras</h2>

  <ul className="cart-list">
    {cart.map(item => (
      <li key={item.id} className="cart-item">
        <div>
          <strong>{item.title}</strong>
          <p>${item.price} · Cantidad: {item.count}</p>
        </div>

        <button 
          className="remove-btn"
          onClick={() => removeItemFromCart(item.id)}
        >
          ✕
        </button>
      </li>
    ))}
  </ul>

  <h3 className="cart-total">Total: ${countTotalPrice()}</h3>

      <div className="formulario-compra">
        <form onSubmit={handleCheckOut}>
          <label htmlFor="username">
            Nombre:
            <input
              value={formData.username}
              onChange={handleChange}
              name="username"
              type="text"
            />
          </label>

          <br />

          <label htmlFor="email">
            Email:
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
            />
          </label>

          <br />

          <label htmlFor="phone">
            Teléfono:
            <input
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              type="text"
            />
          </label>

          <br />

          <button type="submit">Confirmar Compra</button>
          <button type="reset" onClick={handleReset}>
            Limpiar
          </button>
        </form>
      </div>
    </div>
  );
}
