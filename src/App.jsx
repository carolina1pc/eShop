import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Add from './pages/Add/Add.jsx'
import Edit from './pages/Edit/Edit.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Navbar from './components/Navbar/Navigation.jsx'
import Favorites from './pages/Favorites/Favorites.jsx'
import Footer from './components/Footer/Footer.jsx'
import Retur from './pages/Retur/Retur.jsx';
import Category from "./pages/Categories/Category.jsx";
import './App.css'

function App() {
  return (
    <>
    <ErrorBoundary>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/retur" element={<Retur />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </ErrorBoundary> 
    <Footer />
    </>
  )
}

export default App
