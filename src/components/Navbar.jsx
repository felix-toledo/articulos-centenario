import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
  <div className="navbar-bottom">
  <div className="logo-house"></div>
  <div className="logo-subtitle"></div>
    <ul className="navbar-nav">
    <Link className="navbar-brand" to="/">INICIO</Link>
      <li className="nav-item">
        <Link className="nav-link" to="/products">PRODUCTOS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">SOBRE NOSOTROS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">CONTACTO</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-top">
    <div className="social-media">
    <p>IG WP</p>
    </div>
    <div className="logo-title"></div>
    <div className="costumer-info">
    <p>COMPRAS</p>
    </div>
  </div>
</nav>
);

export default Navbar;