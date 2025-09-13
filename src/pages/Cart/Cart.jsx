import React, { useState, useContext } from 'react';
import { Button } from '../../styles/StyledElements.js';
import { CartContext } from './CartContext.jsx';
import { Link } from 'react-router-dom';
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    telefon: '',
    email: '',
    judetul: '',
    localitatea: '',
    adresa: ''
  });

  const [termsError, setTermsError] = useState("");

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Coșul este gol!");
    return;
  }

  const termsCheckbox = e.target.querySelector('input[type="checkbox"]');
  if (!termsCheckbox.checked) {
    setTermsError("Trebuie să accepți Termenii și condițiile!");
    return;
  }

  setTermsError("");

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

      clearCart();
    setFormData({ name: "", email: "", address: "" });
    })
    .catch((err) => console.error(err));
};

const totalPrice = total.toFixed(2);
const [totalInt, totalDec] = totalPrice.split(".");

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Coșul este gol</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
            <img src={item.image} alt={item.name} className="card-image-cart" />
            <span className="text-name-item">{item.name}</span>
            <button className='btn-delete-cart' onClick={() => removeFromCart(item.id)}>Șterge</button>
            </div>
            <div className="item-info">
            <div className="qty-control">
              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <span className="card-price">
              {(() => {
                const price = (item.price * item.qty).toFixed(2);
                const [intPart, decimalPart] = price.split(".");
                return (
                <>
                <span className="card-price">{intPart}</span>
                <span className="price-decimals">{decimalPart} Lei</span>
                </>
                );
                })()}
                </span>
            </div>
          </div>
        ))
      )}

      <p className="cart-total-text">Total: <span className="price-int">{totalInt}</span>
  <span className="price-decimals">{totalDec} Lei</span></p>

      <form className="client-form" onSubmit={handleSubmit}>
        <input className="client-input" name="nume" value={formData.nume || ""} onChange={handleChange} placeholder="Nume" required />
        <input className="client-input" name="prenume" value={formData.prenume || ""} onChange={handleChange} placeholder="Prenume" required />
        <input className="client-input" name="telefon" value={formData.telefon || ""} onChange={handleChange} placeholder="Telefon" required />
        <input className="client-input" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Email" required />
        <input className="client-input" name="localitatea" value={formData.localitatea || ""} onChange={handleChange} placeholder="Localitatea" required />
        <input className="client-input" name="judetul" value={formData.judetul || ""} onChange={handleChange} placeholder="Judetul" required />
        <input className="client-input" name="adresa" value={formData.adresa || ""} onChange={handleChange} placeholder="Adresa" required />
        <label className="terms-checkbox">
          <input type="checkbox" /><span className="custom-checkbox"></span>Accept 
          <Link to="/terms" className="terms-link">Termenii și condițiile</Link></label>
          {termsError && <p className="error-message">{termsError}</p>}
          <Button className="client-btn" type="submit">Trimite comanda</Button>
      </form>
    </div>
  )
}

export default Cart