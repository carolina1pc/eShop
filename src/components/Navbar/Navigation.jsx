import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { CartContext } from '../../pages/Cart/CartContext.jsx';
import './Navigation.css';
import '../Colors.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  return (
    <nav className='navbar-container'>
      <div className="nav-mobile">
        <Link to="/">
        <span className="logo-mobile"><img src="/logo-eshop.svg" alt="eShop Logo" width="30px" height="30px"/>
  </span>
</Link>

    <SearchBox />

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className='home'><Link to="/">
        <span className="logo-desktop">
          <img src="/logo-eshop.svg" alt="eShop Logo" width="30px" height="30px"/>
  <img src="/text-eshop.svg" alt="eShop Text" style={{ marginLeft: '8px', height: '24px' }} />
</span>
        </Link></li>
        <li className='search'><SearchBox /></li>
        </ul>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>

        <li className='favorites'>
          <Link to="/favorites">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6c-1.5-1.4-3.9-1.4-5.4 0l-.9.9-.9-.9c-1.5-1.4-3.9-1.4-5.4 0-1.6 1.5-1.6 4 0 5.5l6.3 6.2 6.3-6.2c1.6-1.5 1.6-4 0-5.5z"/>
            </svg>Favorite
          </Link>
        </li>
        
        <li className='cart'>
          <Link to="/cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/>
            </svg>Coșul meu
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar