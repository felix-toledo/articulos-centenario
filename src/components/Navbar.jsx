import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
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
  </nav>
);

export default Navbar;