import React from 'react';
import imagen from '../Assets/img/GeekBoxParty.png';
function NavigationBar() {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={imagen} alt="Logo GeekBoxParty" />
      </a>
      <div className="search-bar">
        <input type="text" placeholder="Buscar juegos" />
      </div>
      <div className="sections">
        <ul>
          <li>Ranking2</li>
          <li>Terrenos</li>
          <li>Juegos</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;