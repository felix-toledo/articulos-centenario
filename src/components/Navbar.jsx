import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
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
  </nav>
);

export default Navbar;