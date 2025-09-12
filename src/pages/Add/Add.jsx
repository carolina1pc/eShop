import React, { useState } from "react";
import "../Edit/Edit.css";
export default function Add({ onClose, onAdd }) {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "laptop",
    image: "",
    description: "",
    stock: ""
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(productData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Adaugă produs</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label>
            Nume
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Preț
            <input
              type="number"
              name="price"
              step="0.01"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Categorie
            <select
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>

          <label>
            Imagine (link)
            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Descriere
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Stock
            <input
              type="number"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              min="0"
              required
            />
          </label>

          <div className="modal-buttons">
            <button type="submit" className="btn-save">Adaugă</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Anulează</button>
          </div>
        </form>
      </div>
    </div>
  );
}
