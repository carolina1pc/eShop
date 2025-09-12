import { Link } from "react-router-dom";
import { useState } from "react";
import { SecondaryTitle } from "../../styles/StyledElements";
import Add from "../../pages/Add/Add";
import './CategoryBar.css';

export default function CategoryBar() {
  const [isAdding, setIsAdding] = useState(false);
  const handleOpenAddModal = () => setIsAdding(true);
  const handleCloseAddModal = () => setIsAdding(false);

  const handleAddProduct = (newProduct) => {
  fetch("http://localhost:5000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...newProduct,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock)
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log("Produs adăugat:", data);
      handleCloseAddModal();
    });
};

    return (
      <>
       <SecondaryTitle className="categories-title">Categorii</SecondaryTitle>
         <div className="categories-bar">
            <ul>
            <li><Link to="/category/gaming+accesorii">Gaming & Accesorii</Link></li>
            <li><Link to="/category/laptop+tablete+telefoane">Laptop, Tablete & Telefoane</Link></li>
            <li><Link to="/category/pc+periferice">PC & Periferice</Link></li>
            <button onClick={handleOpenAddModal} className="add-product-btn">Adaugă Produs</button>
            {isAdding && (<Add onClose={handleCloseAddModal} onAdd={handleAddProduct} />)}
            </ul>
          </div>
      </>
    )
}