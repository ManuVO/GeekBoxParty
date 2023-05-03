import React from 'react';
import './css/Perfil.css';
import Avatar from '../Assets/img/avatar.png';
import Logros from '../Components/Logros';
import Premios from '../Components/Premios';
import '../Components/Logros.css';
import NavigationBar from '../Components/NavigationBar';
import moneda from '../Assets/img/premios/moneda mario.png'
import Footer from '../Components/Footer';


const Perfil = ({}) => {
  let avatar = Avatar
  let username = "Mario"
  let bio = "Me gustan los juegos de mesa y soy muy bueno en el tres en raya. Los gatos son mi pasión y me encanta hacer amigos. Juguemos juntos."
  let gamesJugados = 3
  let amigos = 3
  let monedas= 10450
  let EloConect = 1600
  let partidaganadaConect = 5
  let partidaperdidaConect = 3
  let EloSushi = 1800
  let partidaganadaSushi = 156
  let partidaperdidaSushi = 132
  let Elo3 = 1360
  let partidaganada3 = 30
  let partidaperdida3 = 39
  let geekcoin = moneda

  return (
    <>
      <NavigationBar />
      <div className="perfil-user-profile">
        <div className="perfil-user-header">
          <img src={Avatar} alt="User Avatar" className="perfil-avatar" />
          <h1>{username}</h1>
          <div className='perfil-user-bio'>
            <p>{bio}</p>
          </div>
        </div>
        <div className='perfil-user-columnas'>
          <div className="perfil-user-stats">
            <h2>Estadísticas</h2>
            <ul>
              <li>Total Games Jugados: {gamesJugados}</li>
              <li>Total Amigos: {amigos}</li><br></br>
              
            <ul><b>Total GeekCoins: {monedas}<img src={geekcoin} alt="Moneda" className="perfil-geekcoin" /></b></ul><br></br>
              
            <ul><b>Conecta4:</b></ul>
              <li>ELO: {EloConect}</li>
              <li>Partidas Ganadas: {partidaganadaConect}</li>
              <li>Partidas Perdidas: {partidaperdidaConect}</li><br></br>
            
            <ul><b>Sushi Go:</b></ul>
              <li>ELO: {EloSushi}</li>
              <li>Partidas Ganadas: {partidaganadaSushi}</li>
              <li>Partidas Perdidas: {partidaperdidaSushi}</li><br></br>

            <ul><b>Tres en Raya:</b></ul>
              <li>ELO: {Elo3}</li>
              <li>Partidas Ganadas: {partidaganada3}</li>
              <li>Partidas Perdidas: {partidaperdida3}</li><br></br>

          </ul>
          </div>
          <div className="perfil-user-achievements">
            <h2>Logros</h2>
            <Logros />
          </div>
          <div className="perfil-user-compras">
            <h2>Canjea tu Premio</h2>
            <Premios />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;