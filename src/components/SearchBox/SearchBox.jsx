import React from 'react';
import './SearchBox.css';

function SearchBox() {
  return (
    <div className="searchbox-container">
      <input
        type="text"
        placeholder="Caută produse..."
        className="searchbox-input"
      />
      <button className="searchbox-icon" type="submit" aria-label="Caută">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e9fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </div>
  );
}

export default SearchBox;