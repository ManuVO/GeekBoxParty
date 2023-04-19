import '../App.css';
import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GamesSection from '../Components/GamesSection';
import GamesContainer from '../Components/GameContainer'
import brisca from '../Assets/img/tictactoe.png';
//import Conecta4 from "../Games/conecta4/pages/mainMenu/mainMenu";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Rules from "../Games/conecta4/pages/rules/Rules";
import InGame from "../Games/conecta4/inGame/InGame";
import MainMenu from "../Games/conecta4/pages/mainMenu/mainMenu";
import NotFound from "../Games/conecta4/pages/notFound/NotFound";


function GameScreen() {
  return (
    <div className="app-container">
      <Link to="/nueva-pagina">Ir a la nueva página</Link>
      <NavigationBar />
      <div className="content-container">
        <div className="image-container" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#bde3ff' }}>
          <img src={brisca} alt="Tic Tac Toe" style={{ padding: '10px', height: '150px', margin: '0 10px 0 0' }} />
          <div className="text-container" style={{ padding: '10px', height: '200px' }}>
            <h1 style={{ fontSize: '28px', margin: 0 }}>Tic Tac Toe</h1>
            <p style={{ fontSize: '16px', margin: 0 }}>Tic Tac Toe es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 3x3.</p>
          </div>
        </div>
        <div className="GameContainer" style={{ padding: '50px', backgroundColor: '	#FFFFFF' }}>
        <Link
  to="/game/MainMenu"
  style={{
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: 'purple',
    fontSize: '20px',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
  }}
>
  JUGAR
</Link>


          <Routes>
            <Route path="/MainMenu" element={<MainMenu />} />
            <Route path="/ingame" element={<InGame />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default GameScreen;