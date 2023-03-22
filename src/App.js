import "./App.module.scss";
import './App.css';
import Rules from "./pages/rules/Rules";
import MainMenu from "./pages/mainMenu/mainMenu";
import NavigationBar from './components/NavigationBar';
import NotFound from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
import InGame from "./components/inGame/InGame";
import tictactoe from './assets/images/tictactoe.png';
function App() {
  return (

    <div className="app-container">
      <NavigationBar />
      <div className="content-container">
        <div className="image-container" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#bde3ff' }}>
          <img src={tictactoe} alt="Tic Tac Toe" style={{ padding: '10px', height: '150px', margin: '0 10px 0 0' }} />
          <div className="text-container" style={{ padding: '10px', height: '200px' }}>
            <h1 style={{ fontSize: '28px', margin: 0 }}>Tic Tac Toe</h1>
            <p style={{ fontSize: '16px', margin: 0 }}>Tic Tac Toe es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 3x3.</p>
          </div>
        </div>
        <div className="GameContainer">
          <Routes>
            <Route path="/inGame" element={<InGame />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/" element={<MainMenu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
