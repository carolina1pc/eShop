import { useEffect, useState } from "react";
import { PrimaryTitle, SecondaryTitle } from '../../styles/StyledElements.js';
import CategoryBar from '../../components/CategoryBar/CategoryBar.jsx';
import Card from '../../components/Cards/Cards.jsx';
import ProductList from '../Products/ProductList.jsx';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
  <>
  <CategoryBar />
    <div className="homepage-container">
      <div className='home-advertising'>
        </div>
        <div className="cards">
        <ProductList products={products} />
        </div>
      </div>
  </>
  )
}

export default Home;
