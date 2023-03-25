import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GamesSection from '../Components/GamesSection';
import GamesContainer from '../Components/GameContainer'
import brisca from '../Assets/img/tictactoe.png';


function GameScreen() {
    return (
      <div className="app-container">
        <NavigationBar />
        <div className="content-container">
          <div className="image-container" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#bde3ff' }}>
            <img src={brisca} alt="Tic Tac Toe" style={{padding: '10px', height: '150px', margin: '0 10px 0 0' }} />
            <div className="text-container" style={{padding: '10px', height: '200px' }}>
              <h1 style={{ fontSize: '28px', margin: 0 }}>Tic Tac Toe</h1>
              <p style={{ fontSize: '16px', margin: 0 }}>Tic Tac Toe es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 3x3.</p>
            </div>
          </div>
          <div className="GameContainer" style={{ padding: '50px', backgroundColor: '	#FFFFFF' }}>
            <GamesContainer />
          </div>
        </div>
      </div>
    );
  }
  
  export default GameScreen;