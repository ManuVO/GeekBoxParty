import "./css/conecta4.module.scss"
import './css/conecta4.css';
import Rules from "../games/conecta4/pages/rules/Rules";
import MainMenu from "../games/conecta4/pages/mainMenu/mainMenu";
import NotFound from "../games/conecta4/pages/notFound/NotFound";
import NavigationBar from '../components/NavigationBar';
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
import InGame from "../games/conecta4/inGame/InGame";
import tictactoe from '../assets/images/tictactoe.png';
function Conecta4() {
  return (
          <Routes>
            <Route path="/inGame" element={<InGame />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/" element={<MainMenu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
  );
}

export default Conecta4;