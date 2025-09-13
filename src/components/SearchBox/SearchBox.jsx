import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBox.css";

function SearchBox({ products }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Array.isArray(products)) return;

    if (query.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = products.filter(
      (product) =>
        product.name?.toLowerCase().includes(query.toLowerCase()) ||
        product.category?.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(results);
  }, [query, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="searchbox-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Caută produse..."
        className="searchbox-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="searchbox-icon" type="submit" aria-label="Caută">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00e9fe"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {filtered.length > 0 && (
        <div className="search-results">
          {filtered.map((product) => {
  const price = product.price.toFixed(2);
  const [intPart, decimalPart] = price.split(".");

  return (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="search-result-item"
      onClick={() => setQuery("")}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="search-result-image"
        />
      )}
      <div className="search-result-text">
        <p>{product.name}</p>
        <p className="search-result-price">
          {intPart}
          <span className="price-decimals">{decimalPart}</span> lei
        </p>
      </div>
    </Link>
  );
})}
        </div>
      )}
    </form>
  );
}

export default SearchBox;
