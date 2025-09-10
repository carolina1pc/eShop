import React from "react";
import Card from '../../components/Cards/Cards.jsx';
import "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
