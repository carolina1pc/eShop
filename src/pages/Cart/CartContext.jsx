import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      if (existing.qty < product.stock) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        alert("Nu mai avem suficiente produse pe stoc!");
        return prevCart;
      }
    }

    if (product.stock > 0) {
      return [...prevCart, { ...product, qty: 1 }];
    } else {
      alert("Produsul nu mai este pe stoc!");
      return prevCart;
    }
  });
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

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const clearCart = () => {
    setCart([]);
  };

    return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, total, totalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
