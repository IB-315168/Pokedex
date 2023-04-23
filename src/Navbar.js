import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar">
        <img src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png" alt="Pokeball" className="navbar-logo" />
        <ul className="navbar-brand">
          <li className="navbar-item">
            <NavLink className="nav-link" to="/Pokedex">Pokédex</NavLink>
          </li>
          <li className="navbar-brand">
            <NavLink className="nav-link" to="/Pokedex/about">About</NavLink>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;