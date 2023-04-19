import React, { useState } from "react";
import imagen from '../Assets/img/GeekBoxParty.png';
import imagen2 from '../Assets/img/Perfil.png';
import { Link } from 'react-router-dom';
import './NavigationBar.css';


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
    <nav>
      <div className="left-section">
        <Link to="/" className="logo">
          <img src={imagen} alt="Logo GeekBoxParty" />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Buscar juegos" />
        </div>
      </div>

      <div className="center-section">
        <ul className="menu">
          <li><a href="#">Ranking</a></li>
          <li><a href="#">Torneos</a></li>
          <li><a href="#">Juegos</a></li>
        </ul>
      </div>
      <div className="right-section">
        <div className="profile">
          <img src={imagen2} alt="Avatar" onClick={toggleProfileMenu} />
          <div className={profileMenuOpen ? "dropdown active" : "dropdown"}>
            <a href="#">Perfil</a>
            <a href="#">Mis Juegos</a>
            <a href="#">Torneos Activos</a>
            <a href="#">Amigos</a>
            <a href="#">Cerrar sesión</a>
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