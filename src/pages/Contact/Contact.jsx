import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Eroare la trimiterea mesajului!");
      }

      alert("Mesajul tău a fost trimis și salvat în DB!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("A apărut o problemă, încearcă din nou.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contactează-ne</h1>
      <p>
        Ai întrebări sau nelămuriri? Completează formularul de mai jos sau
        contactează-ne direct prin email sau telefon.
      </p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Trimite</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> contact@eshop.ro</p>
          <p><strong>Telefon:</strong> +40 700 123 456</p>
          <p><strong>Adresă:</strong> Str. Exemplu 123, București, România</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;