import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../pages/Cart/CartContext";
import { Button } from "../../styles/StyledElements.js";
import './Cards.css';

function Card({ product }) {
  const truncateName = (name) =>
    name.length > 30 ? name.substring(0, 30) + "..." : name;

  const price = product.price.toFixed(2); // ex: "29.99"
  const [intPart, decimalPart] = price.split(".");

  const { addToCart } = useContext(CartContext);

  return (
      <div className="card">
        <Link to={`/product/${product.id}`} className="card-link"> 
        {product.image && (
          <img src={product.image} alt={product.name} className="card-image" />
        )}
        <h3 className="card-title">{truncateName(product.name)}</h3>
        </Link>

       <div className="card-price-container">
        <p className="card-price">
        {intPart}
        <span className="price-decimals">{decimalPart}</span> lei
        </p>

        <button className="add-cart-button" onClick={() => addToCart(product)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/>
            </svg>
         </button>
         </div>
      {/* <p>{product.description}</p> */}
      </div>
  );
}

export default Card;

