import { createContext, useState } from 'react';

const cartContext = createContext({ cart: [] });

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemToCart(item, count) {
    const newCart = structuredClone(cart);
    const index = newCart.findIndex(prod => prod.id === item.id);

    if (index !== -1) {
      newCart[index].count += count;
    } else {
      newCart.push({ ...item, count });
    }

    setCart(newCart);
  }

  function removeItemFromCart(idRemove) {
    setCart(cart.filter(item => item.id !== idRemove));
  }

  function countItemInCart() {
    return cart.reduce((total, item) => total + item.count, 0);
  }

  function clearCart() {
    setCart([]);
  }

  function countTotalPrice() {
    return cart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        countItemInCart,
        clearCart,
        countTotalPrice
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
