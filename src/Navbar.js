import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <img src="/pokeball.png" alt="Pokeball" className="navbar-logo" />
        <ul className="navbar-brand">
          <li className="navbar-item">
            <a className="nav-link" href="/Pokedex">Pokédex</a>
          </li>
          <li className="navbar-brand">
            <a className="nav-link" href="/Pokedex/about">Search</a>
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