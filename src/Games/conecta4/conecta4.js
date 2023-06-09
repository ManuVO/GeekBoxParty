import "./css/conecta4.module.scss"
import './css/conecta4.css';
import Rules from "./pages/rules/Rules";
import MainMenu from "./pages/mainMenu/mainMenu";
import NotFound from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
import InGame from "./inGame/InGame";
function Conecta4() {
  return (
    <Routes>
    <Route path="/" element={<MainMenu />} />
    <Route path="/ingame" element={<InGame />} />
    <Route path="/rules" element={<Rules />} />
  </Routes>
  );
}

export default Conecta4;