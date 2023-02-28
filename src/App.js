import React, {useState} from "react";
import { BrowserRouter, Routes, Route, useParams  } from "react-router-dom";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Products from './components/ProductsPage';
import Contact from './components/ContactPage';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import WelcomeLogin from './components/WelcomeLoginPage';

import './style.css'

function profilePage(){}

function App() {
  const [name, setName] = useState(window.$name);

  return (
    <BrowserRouter>
    <Navbar name={name}/>
    <div className="body">
      <Routes>
        <Route path="/login" element={<WelcomeLogin setName={setName} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products:itemCategory" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
