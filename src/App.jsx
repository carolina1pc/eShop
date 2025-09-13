import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Home from './pages/Home/Home.jsx';
import Add from './pages/Add/Add.jsx';
import Edit from './pages/Edit/Edit.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Navbar from './components/Navbar/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import Category from "./pages/Categories/Category.jsx";
import TermsPage from "./pages/Terms/TermsPage.jsx";
import ProductPage from "./pages/Products/Products.jsx";
import SearchResults from "./components/SearchBox/SearchResults.jsx";
import AboutUs from "./pages/About/AboutUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import './App.css';
import './components/Colors.css';

function App() {
  return (
    <>
    <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </ErrorBoundary> 
    <Footer />
    </>
  )
}

export default App
