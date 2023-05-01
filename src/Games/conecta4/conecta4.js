import "./css/conecta4.module.scss"
import './css/conecta4.css';
import Rules from "./pages/rules/Rules";
import MainMenu from "./pages/mainMenu/mainMenu";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import InGame from "./inGame/InGame";
function Conecta4() {
  
  return (
    <Routes>
      <Route path="/game/conecta4/mainMenu" element={<MainMenu />} />
      <Route path="/game/conecta4/ingame" element={<InGame />} />
      <Route path="/game/conecta4/rules" element={<Rules />} />
    </Routes> 

  );
}

export default Conecta4;