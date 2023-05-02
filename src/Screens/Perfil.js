import React from 'react';
import './css/Perfil.css';
import Avatar from '../Assets/img/avatar.png';
import Logros from '../Components/Logros';
import '../Components/Logros.css';
import NavigationBar from '../Components/NavigationBar';

const Perfil = ({}) => {
  let avatar = Avatar
  let username = "Mario"
  let bio = "Me gustan los juegos de mesa y soy muy bueno en el tres en raya. Me gustan los juegos de mesa y soy muy bueno en el tres en raya. Me gustan los juegos de mesa y soy muy bueno en el tres en raya. Me gustan los juegos de mesa y soy muy bueno en el tres en raya"
  let gamesJugados = 0
  let tiempoJuego = 0
  let amigos = 0

  return (
    <>
      <NavigationBar />
      <div className="user-profile">
        <div className="user-header">
          <img src={avatar} alt="User Avatar" className="avatar" />
          <h1>{username}</h1>
          <div className='user-bio'>
            <p>{bio}</p>
          </div>
        </div>

        <div className='user-columnas'>
          <div className="user-stats">
            <h2>Estadísticas</h2>
            <ul>
              <li>Total Games Jugados: {gamesJugados}</li>
              <li>Total Tiempo Juego: {tiempoJuego}</li>
              <li>Total Amigos: {amigos}</li>
            </ul>
          </div>
          <div className="user-achievements">
            <h2>Logros</h2>
            <Logros />
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;