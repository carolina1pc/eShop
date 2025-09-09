import React, { useState, useEffect } from 'react';
import { Button } from '../../styles/StyledElements.js';
import { CartContext } from './CartContext';
import { PrimaryTitle, SecondaryTitle } from '../../styles/StyledElements.js';
import './Cart.css'

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    adresa: '',
    telefon: '',
    email: ''
  });

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const cartItems = data.map((item) => ({ ...item, qty: 1 }));
        setCart(cartItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Eroare la incarcarea produselor:", err);
        setLoading(false);
      });
    }, []);

    const handleQtyChange = (id, newQty) => {
      setCart(
        cart.map((item) =>
        item.id === id ? {...item, qty: Number(newQty)} : item
      ));
    };
    
    const total = cart.reduce((acc,item) => acc + item.price * item.qty, 0);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      produse: cart,
      dateClient: formData,
      total: total,
    };
    fetch("http://localhost:5000/comands", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
   })
    .then(res => res.json())
    .then(data => console.log("Comanda salvată:", data))
    .catch(err => console.error(err));
  };

  if (loading) return <p>Se încarcă produsele...</p>;

  return (
    <div className="cart-container">
  {cart.length === 0 ? (
      <p>Coșul este gol</p>
    ) : (
      cart.map(item => (
        <div className="cart-item" key={item.id}>
          <span>{item.name}</span>
          <span>{item.qty}</span>
          <span>{item.price * item.qty} Lei</span>
        </div>
      ))
    )}

  <form onSubmit={handleSubmit}>
    <input name="nume" value={formData.nume} onChange={handleChange} placeholder="Nume" required />
    <input name="prenume" value={formData.prenume} onChange={handleChange} placeholder="Prenume" required />
    <input name="adresa" value={formData.adresa} onChange={handleChange} placeholder="Adresa" required />
    <input name="telefon" value={formData.telefon} onChange={handleChange} placeholder="Telefon" required />
    <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
    <Button type="submit">Trimite comanda</Button>
  </form>
</div>
  )
}

export default Cart