import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Products from './components/ProductsPage';
import Contact from './components/ContactPage';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import './style.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="body">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
