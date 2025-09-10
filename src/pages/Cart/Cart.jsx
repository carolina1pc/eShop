import React, { useState, useContext } from 'react';
import { Button } from '../../styles/StyledElements.js';
import { CartContext } from './CartContext.jsx';
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, updateQty, total } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    telefon: '',
    email: '',
    judetul: '',
    localitatea: '',
    adresa: ''
  });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Coșul este gol!");
      return;
    }

    const order = {
      produse: cart,
      dateClient: formData,
      total,
    };

    fetch("http://localhost:5000/comands", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Comanda a fost salvată:", data);

      cart.forEach((item) => {
        const newStock = item.stock - item.qty;

        fetch(`http://localhost:5000/products/${item.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stock: newStock }),
        })
          .then((res) => res.json())
          .then((updated) =>
            console.log(`Stoc actualizat pt ${updated.name}: ${updated.stock}`)
          )
          .catch((err) => console.error("Eroare la update stoc:", err));
      });

      alert("Comanda trimisă cu succes!");
    })
    .catch((err) => console.error(err));
};

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Coșul este gol</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.name}</span>
            <input
              type="number"
              value={item.qty}
              min="1"
              onChange={(e) => updateQty(item.id, e.target.value)}
            />
            <span>{item.price * item.qty} Lei</span>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        ))
      )}

      <p>Total: {total} Lei</p>

      <form onSubmit={handleSubmit}>
        <input name="nume" value={formData.nume} onChange={handleChange} placeholder="Nume" required />
        <input name="prenume" value={formData.prenume} onChange={handleChange} placeholder="Prenume" required />
        <input name="telefon" value={formData.telefon} onChange={handleChange} placeholder="Telefon" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="localitatea" value={formData.localitatea} onChange={handleChange} placeholder="Localitatea" required />
        <input name="judetul" value={formData.judetul} onChange={handleChange} placeholder="Judetul" required />
        <input name="adresa" value={formData.adresa} onChange={handleChange} placeholder="Adresa" required />
        <Button type="submit">Trimite comanda</Button>
      </form>
    </div>
  )
}

export default Cart