import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
  <div className="navbar-bottom">
  <Link className="navbar-brand" to="/">Inicio</Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/products">Productos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Sobre Nosotros</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contacto</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-top">
    <div className="social-media">
    <p>aca van las redes</p>
    </div>
    <h1>CENTENARIO</h1>
    <div className="costumer-info">
    <p>aca va el carrito</p>
    </div>
  </div>
</nav>
);

export default Navbar;