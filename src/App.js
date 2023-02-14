import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Products from './components/ProductsPage';
import Contact from './components/ContactPage';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item/:id" render={({ match }) => (
            <ItemDetailContainer itemId={match.params.id} />
          )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
