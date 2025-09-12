import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../../../db.json";
import ProductDetail from "./ProductDetail";
import Edit from "../Edit/Edit";

export default function ProductPage({ products }) {
  const { id } = useParams();
  const product = productsData.products.find((p) => p.id === id);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

const handleEdit = () => {
  setEditingProduct(product);
  setIsEditing(true);
};

 const handleSave = (updatedProduct) => {
  fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Produs actualizat:", data);
      setCurrentProduct(data);
      setIsEditing(false);
    })
    .catch((err) => console.error("Eroare la update produs:", err));
};

 const handleDelete = (productId, productName) => {
  if (window.confirm(`Ești sigur că vrei să ștergi produsul "${productName}"?`)) {
    fetch(`http://localhost:5000/products/${productId}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          alert("Produsul a fost șters cu succes!");
          // poți face un redirect sau actualiza lista de produse
        } else {
          alert("A apărut o eroare la ștergere!");
        }
      })
      .catch(err => console.error(err));
  }
};

  return (
    <div className="product-page-container">
  {product ? (
    <ProductDetail
      product={product}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  ) : (
    <p>Produsul nu a fost găsit.</p>
  )}

  {editingProduct && (
    <Edit
      product={editingProduct}
      onClose={() => setEditingProduct(null)}
      onSave={handleSave} 
    />
  )}
</div>

  );
}