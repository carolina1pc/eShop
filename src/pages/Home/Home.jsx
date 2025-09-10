import { useEffect, useState } from "react";
import { PrimaryTitle, SecondaryTitle } from '../../styles/StyledElements.js';
import CategoryBar from '../../components/CategoryBar/CategoryBar.jsx';
import Card from '../../components/Cards/Cards.jsx';
import ProductList from '../Products/ProductList.jsx';
import './Home.css';

// import Image1 from '../../assets/images/advertising/20112.avif';


function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
  <>
  <CategoryBar />  {/* pe mobile sa trec categoriile in nav menu si sa le fac un separator simplu ex: o linie, bara etc; si sa fie afisate jos, deci 2 divuri cu space-between */}
    <div className="homepage-container">
      <div className='home-advertising'>
        {/* <img src="/assets/images/advertising/20112.avif" alt="Home Advertising" /> */}
        </div>
        <ProductList products={products} />
      </div>
  </>
  )
}

export default Home;