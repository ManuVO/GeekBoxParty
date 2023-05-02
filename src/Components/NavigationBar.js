import React, { useState } from "react";
import imagen from '../Assets/img/GeekBoxParty.png';
import imagen2 from '../Assets/img/Perfil.png';
import './NavigationBar.css';
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";


function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleProfileMenu() {
    setProfileMenuOpen(!profileMenuOpen);
  }
  return (
    <nav className="navBarGeneral">
      <div className="left-section">
        <a href="/" className="logo">
          <img src={imagen} alt="Logo GeekBoxParty" />
        </a>
        <div className="search-bar">
          <input type="text" placeholder="Buscar juegos" />
        </div>
      </div>

      <div className="center-section">
        <ul className="menu">
          <li><a href="/ranking">Ranking</a></li>
          <li><a href="/torneos">Torneos</a></li>
          <li><a href="/games">Juegos</a></li>
        </ul>
      </div>
      <div className="right-section">
        <div className="profile">
          <img src={imagen2} alt="Avatar" onClick={toggleProfileMenu} />
          <div className={profileMenuOpen ? "dropdown active" : "dropdown"}>
            <a href="/perfil">Perfil</a>
            <a href="/login">Cerrar sesión</a>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;