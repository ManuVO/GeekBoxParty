// import '../App.css';
import "./css/GameScreen.css";
import React from "react";
import NavigationBar from "../Components/NavigationBar";
import ImgConecta4 from "../Assets/img/conecta4.webp";
import ImgTicTacToe from "../Assets/img/tictactoe.png";
import ImgSushigo from "../Assets/img/sushigoIcono.jpeg";
//import Conecta4 from "../Games/conecta4/pages/mainMenu/mainMenu";
import { Routes, Route, useParams } from "react-router-dom";
import Conecta4 from "../Games/conecta4/conecta4";
import Tictactoe from "../Games/tictactoe/tictactoe";
import Sushigo from "../Games/sushi-go/SushiGo";
//Imports routes del conecta4
import Rules from "../Games/conecta4/pages/rules/Rules";
import InGame from "../Games/conecta4/inGame/InGame";
import MainMenu from "../Games/conecta4/pages/mainMenu/mainMenu";
import Footer from "../Components/Footer";
import { Container, Row } from "react-bootstrap";

function GameScreen() {
  const { game } = useParams();

  const titleGame = {
    tictactoe: "Tictactoe",
    conecta4: "Conecta4",
    brisca: "Brisca",
    solitaire: "Solitaire",
    chess: "Chess",
    sushigo: "Sushi-Go",
    explodingkittens: "Eploding Kittens",
  };

  const imgGame = {
    tictactoe: ImgTicTacToe,
    conecta4: ImgConecta4,
    brisca: "Brisca",
    solitaire: "Solitaire",
    chess: "Chess",
    sushigo: ImgSushigo,
    explodingkittens: "#",
  };

  const gameComponent = {
    tictactoe: <Tictactoe />,
    conecta4: <Conecta4 />,
    brisca: "",
    solitaire: "",
    chess: "",
    sushigo: <Sushigo />,
  };

  const bodyGame = {
    tictactoe:
      "El tres en raya es un juego de mesa para dos jugadores que se juega en un tablero de 3x3 casillas. Cada jugador marca alternadamente una casilla con su símbolo (generalmente una X y un O) con el objetivo de conseguir tres símbolos en línea, ya sea horizontal, vertical o diagonalmente, antes que su oponente. Es un juego sencillo pero muy popular y divertido.",
    conecta4:
      "Conecta 4 es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 6x7. Puedes jugar contra otro jugador o contra la máquina para prácticar.",
    brisca:
      "La Brisca es un juego de naipes popular en España e Italia que implica ganar bazas para acumular puntos utilizando una baraja de 40 cartas con valores numéricos y jerarquías. Es un juego estratégico y emocionante que se juega a menudo en parejas.",
    solitaire:
      "El solitario es un juego de cartas para un solo jugador que consiste en ordenar las cartas en cuatro pilas separadas por palos, desde el As hasta el Rey. Requiere habilidad y estrategia para ganar y es un pasatiempo popular en todo el mundo.",
    chess:
      "El ajedrez es un juego de mesa para dos jugadores que implica mover piezas estratégicamente para capturar al rey del oponente en un tablero de 64 casillas. Es un juego intelectual y desafiante que se ha jugado durante siglos.",
    sushigo:
      "El ajedrez es un juego de mesa para dos jugadores que implica mover piezas estratégicamente para capturar al rey del oponente en un tablero de 64 casillas. Es un juego intelectual y desafiante que se ha jugado durante siglos.",
    explodingkittens:
      "Gatos que Explotan, concha de su madre, sun gatinhos explusivos",
  };

  const title = titleGame[game];
  const body = bodyGame[game];
  const img = imgGame[game];

  let componente = gameComponent[game];
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="content-container">
        <div
          className="image-container"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#bde3ff",
          }}
        >
          <img
            src={img}
            alt="Imagen del juego"
            style={{ padding: "10px", height: "150px", margin: "0 10px 0 0" }}
          />
          <div className="text-container text-fit" style={{ padding: "10px" }}>
            <h1 className="title text-fit">{title}</h1>
            <p className="description text-fit">{body}</p>
          </div>
          {/* Aqui añade un btn-success Invitar a un Amigo */}
        </div>
        <div
          className=""
          style={{ padding: "50px", backgroundColor: "#FFFFFF" }}
        >
          {game === "conecta5" ? (
            <>
              {console.log("%c Estás dentro del if", "color: blue")}
              <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route path="/ingame" element={<InGame />} />
                <Route path="/rules" element={<Rules />} />
              </Routes>
            </>
          ) : (
            // Aquí puedes colocar otro componente o contenido si "game" no es igual a "conecta"
            componente
          )}
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
