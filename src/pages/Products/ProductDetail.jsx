import React from "react";
import { useContext } from "react";
import { CartContext } from "../../pages/Cart/CartContext";
import { PrimaryTitle } from "../../styles/StyledElements";
import "./ProductDetail.css";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ product, onEdit, onDelete, onAddToCart }) {
  if (!product) return <p>Se încarcă produsul...</p>;

  const price = product.price.toFixed(2);
  const [intPart, decimalPart] = price.split(".");
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-detail-container-horizontal">
      <h2 className="product-name">{product.name}</h2>

      <div className={styles.container}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div className="product-actions">
          <span className="product-price">
            <span className="price-int">{intPart}</span>
            <span className="product-price-decimals">{decimalPart} Lei</span>
          </span>

          <div className="action-buttons">
            <button className="btn-edit" onClick={onEdit}>Edit</button>

            <button className="btn-delete" onClick={() => onDelete(product.id, product.name)}>Delete</button>
            <button className={`btn-add-cart ${product.stock === 0 ? "disabled" : ""}`}
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/>
            </svg>
         </button>
          </div>
        </div>

        {product.stock === 0 && (
          <p className="out-of-stock">Produsul nu este pe stoc</p>
          )}

      </div>
      </div>
      <div className="product-description-section">
      <PrimaryTitle>Descriere</PrimaryTitle>
      <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}