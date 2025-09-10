import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        setCart(cart.map((item) =>
        item.id === product.id ? {...item, qty: item.qty + 1} : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: Number(qty) } : item
      )
    );
  };

  const total = cart
  .reduce((acc, item) => acc + item.price * item.qty, 0)
  .toFixed(2);

    return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, total }}>
      {children}
    </CartContext.Provider>
  );
}