import React, { useState, useEffect } from "react";
import "./Edit.css";

export default function Edit({ product, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: ""
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const updatedProduct = {
    ...formData,
    price: Number(formData.price),
    stock: Number(formData.stock),
  };

  fetch(`http://localhost:5000/products/${product.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
  .then(res => res.json())
  .then((data) => {
    console.log("Produs actualizat:", data);
    onSave(data);
    onClose();
  })
  .catch((err) => console.error(err));
};

  const categories = [
    "laptop",
    "tableta",
    "telefon",
    "consola",
    "accesorii",
    "pc",
    "periferice",
    "componente"
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editare produs</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <label>
            Nume:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Preț:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              required
            />
          </label>

          <label>
            Categorie:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Selectează categorie</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label>
            Imagine (link):
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://exemplu.com/poza.png"
              required
            />
          </label>

          <label>
            Descriere:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>

          <label>
            Stoc:
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              required
            />
          </label>

          <div className="modal-buttons">
            <button type="submit" className="btn-save">Salvează</button>
            <button type="button" className="btn-cancel" onClick={onClose}>
              Anulează
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}