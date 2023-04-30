// import '../App.css';
import './css/GameScreen.css';
import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GamesSection from '../Components/GamesSection';
import GamesContainer from '../Components/GameContainer'
import conecta4 from '../assets/img/conecta4.webp';
//import Conecta4 from "../Games/conecta4/pages/mainMenu/mainMenu";
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Rules from "../Games/conecta4/pages/rules/Rules";
import InGame from "../Games/conecta4/inGame/InGame";
import MainMenu from "../Games/conecta4/pages/mainMenu/mainMenu";



function GameScreen() {
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="content-container">
        <div className="image-container" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#bde3ff' }}>
          <img src={conecta4} alt="Conecta 4" style={{ padding: '10px', height: '150px', margin: '0 10px 0 0' }} />
          <div className="text-container" style={{ padding: '10px', height: '200px' }}>
            <h1 class="title">Conecta 4</h1>
            <p class="description">Conecta 4 es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 6x7.</p>
            <p class="description">Puedes jugar contra otro jugador o contra la máquina para prácticar.</p>
          </div>
        </div>
        <div className="GameContainer" style={{ padding: '50px', backgroundColor: '	#FFFFFF' }}>
          <Routes>
            <Route path="/conecta4" element={<MainMenu />} />
            <Route path="/ingame" element={<InGame />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default GameScreen;