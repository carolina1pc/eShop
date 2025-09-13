import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards.jsx";
import productsData from '../../../db.json';
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import "./SearchResults.css";

function SearchResults() {
  const { query } = useParams();
  const searchTerm = decodeURIComponent(query);

  const filtered = Array.isArray(productsData.products)
  ? productsData.products.filter(
      (product) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];

  return (
    <>
    <CategoryBar />
    <div className="search-results-page">
      <h2>Rezultate pentru "{searchTerm}"</h2>
      {filtered.length === 0 ? (
        <p>Nu s-au găsit produse.</p>
      ) : (
        <div className="search-results-grid">
          {filtered.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default SearchResults;
