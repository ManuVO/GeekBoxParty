import React from 'react';
import logo from '../../Assets/img/sushigo.jpg';
import PlayerMarker from '../../Components/PlayerMarker';

function App() {
  const players = [
    { username: 'Player1', ronda: 'Ronda Actual: 2', puntosrondaactual: 'Puntos Ronda Actual: 10', puntosactuales: 'Puntos Totales: 24', numcartas: 'N° Cartas en Mano: 4' },
    { username: 'Player2', ronda: 'Ronda Actual: 2', puntosrondaactual: 'Puntos Ronda Actual: 8',  puntosactuales: 'Puntos Totales: 20', numcartas: 'N° Cartas en Mano: 4' },
    { username: 'Player3', ronda: 'Ronda Actual: 2', puntosrondaactual: 'Puntos Ronda Actual: 4',  puntosactuales: 'Puntos Totales: 12', numcartas: 'N° Cartas en Mano: 4' },
    { username: 'Player4', ronda: 'Ronda Actual: 2', puntosrondaactual: 'Puntos Ronda Actual: 2',  puntosactuales: 'Puntos Totales: 8',  numcartas: 'N° Cartas en Mano: 4' },
    
  ];

  return (
    <div className="App-sushigo">
      <header className="App-header-sushigo">
        <img src={logo} className="App-logo-sushigo" alt="logo" />
        <div className="player-markers-sushigo">
          {players.map((player, index) => (
            <PlayerMarker key={index} player={player} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

