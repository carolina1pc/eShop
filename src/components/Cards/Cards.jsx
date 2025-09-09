import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../pages/Cart/CartContext";
import { Button } from "../../styles/StyledElements.js";
import './Cards.css';

function Card({ product }) {
  const truncateName = (name) =>
    name.length > 40 ? name.substring(0, 40) + "..." : name;

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

        <p className="card-price">
        {intPart}
        <span className="price-decimals">{decimalPart}</span> lei
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </p>
      {/* <p>{product.description}</p> */}
      </div>
  );
}

export default Card;

