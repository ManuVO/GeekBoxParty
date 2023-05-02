import React from 'react';
import './PlayerMarker.css';

const PlayerMarker = ({ player }) => {
  return (
    <div className="player-marker-sushigo" >
      <div className="username-sushigo">{player.username}</div><br></br>
      <div className="points-sushigo">{player.ronda}</div>
      <div className="points-sushigo">{player.puntosrondaactual}</div>
      <div className="points-sushigo">{player.puntosactuales}</div>
      <div className="points-sushigo">{player.numcartas}</div>
    </div>
  );
};

export default PlayerMarker;
