import React from 'react';
import imagen from '../assets/images/GeekBoxParty.png';
function NavigationBar() {
  return (
    <nav style={{backgroundColor: '#0d99ff'}}>
      <a href="#" className="logo">
        <img src={imagen} alt="Logo GeekBoxParty" />
      </a>
      <div className="search-bar">
        <input type="text" placeholder="Buscar juegos" />
      </div>
      <div className="sections">
        <ul>
          <li>Ranking</li>
          <li>Terrenos</li>
          <li>Juegos</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;