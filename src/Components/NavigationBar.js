import React, { useState } from "react";
import imagen from "../Assets/img/GeekBoxParty.png";
import imagen2 from "../Assets/img/Perfil.png";
import "./NavigationBar.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { Dropdown, InputGroup, Nav} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredJuegos, setFilteredJuegos] = useState([]);

  const navigate = useNavigate();
  function searchGameClick(juego) {
    navigate(`/game/${juego}`);
  }

  const juegos = [
    {
      image: "https://i.imgur.com/ucxy7Dd.png",
      title: "TicTacToe",
      description: "Un clásico juego de estrategia para dos jugadores.",
      clickEvent: () => searchGameClick("tictactoe"),
    },
    {
      image: "https://i.imgur.com/dkDI0aG.jpg",
      title: "Conecta 4",
      description:
        "Conecta cuatro fichas del mismo color en línea recta para ganar.",
      clickEvent: () => searchGameClick("conecta4"),
    },
    {
      image: "https://i.imgur.com/j3npLEQ.jpg",
      title: "Sushi Go",
      description:
        "Un divertido juego de cartas en el que debes recolectar el mejor sushi.",
      clickEvent: () => searchGameClick("sushigo"),
    },
    {
      image: "https://i.imgur.com/hVkjqlP.png",
      title: "Brisca",
      description:
        "Un popular juego de cartas en el que debes ganar tantos puntos como sea posible.",
      clickEvent: () => searchGameClick("brisca"),
    },
    {
      image:
        "https://play-lh.googleusercontent.com/ngTyk7oHMyHgdaDLWJ7iJ_CtvZvjU5pYn-bugNpGOrzxjNU4dxIavkoeP4F0Zao2HQ",
      title: "Ajedrez",
      description: "Descripcion",
      clickEvent: () => searchGameClick("chess"),
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Parch%C3%ADs.svg/320px-Parch%C3%ADs.svg.png",
      title: "Parchís",
      description:
        "Juego de mesa tradicional español que se juega con dados y fichas, donde el objetivo es mover las fichas por el tablero hasta llevarlas a la meta antes que los demás jugadores.",
      clickEvent: () => searchGameClick("parchis"),
    },
    {
      image:
        "https://play-lh.googleusercontent.com/_fvEc13w1eutCwraTy2TKq-zDx2vfq1rPKoDHeMCSeaSGEww4PIdJL9ugY7hKk4qfx0",
      title: "Exploding Kittens",
      description:
        "Es un juego de cartas de estrategia y suerte en el que los jugadores intentan evitar a toda costa ser eliminados por cartas de Gatitos Explosivos.",
        clickEvent: () => searchGameClick("explodingKittens"),
      },
    {
      image:
        "https://juegosdemesayrol.com/wp-content/uploads/Catan-El-juego-10.jpg",
      title: "Catán",
      description:
        "Los jugadores compiten por construir y desarrollar colonias en una isla ficticia a través de la gestión de recursos y el intercambio comercial.",
        clickEvent: () => searchGameClick("catan"),
      },
    {
      image:
        "https://www.ludonauta.es/files/ludico/juegos-mesas/juego-mesa-virus-2015-1544494627.jpg",
      title: "Virus!",
      description:
        "Juego de cartas donde los jugadores compiten por ser el primero en curar todas sus enfermedades y ganar el juego, pero también pueden sabotear a los demás con virus y medicinas defectuosas.",
        clickEvent: () => searchGameClick("virus"),
      },
    {
      image: "https://cdn.beahero.gg/2021/01/risk-portada.jpg",
      title: "Risk",
      description:
        "Es un juego de estrategia en el que los jugadores deben conquistar territorios y eliminar a sus oponentes mediante el uso de tropas y tácticas militares, con el objetivo de controlar el mundo.",
        clickEvent: () => searchGameClick("risk"),
      },
  ];

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleProfileMenu() {
    setProfileMenuOpen(!profileMenuOpen);
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
    if (value !== "") {
      const filtered = juegos.filter((juego) =>
        juego.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredJuegos(filtered);
    } else {
      setFilteredJuegos([]);
    }
  }

  return (
    <nav className="nav-navBarGeneral">
      <div className="nav-left-section">
        <a href="/" className="nav-logo">
          <img src={imagen} alt="Logo GeekBoxParty" />
        </a>
        <div className="nav-search-bar">
          <InputGroup>
            <Dropdown>
              <Dropdown.Toggle
                as="input"
                type="text"
                placeholder="Buscar juegos"
                value={search}
                onChange={handleSearch}
              />
              {filteredJuegos.length > 0 && (
                <Dropdown.Menu className="search-results-list">
                  {filteredJuegos.map((juego, index) => (
                    <Dropdown.Item key={index} onClick={juego.clickEvent}>
                      {juego.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              )}
            </Dropdown>
          </InputGroup>
        </div>
      </div>

      <div className="nav-center-section">
        <ul className="nav-menu">
          <li>
            <a href="/ranking">Ranking</a>
          </li>
          <li>
            <a href="/torneos">Torneos</a>
          </li>
          <li>
            <a href="/games">Juegos</a>
          </li>
          <li>
            <a href="/comunidad">Comunidad</a>
          </li>
        </ul>
      </div>
      <div className="nav-right-section">
        <div className="nav-profile">
          <img src={imagen2} alt="Avatar" onClick={toggleProfileMenu} />
          <div className={profileMenuOpen ? "dropdown active" : "dropdown"}>
            <a href="/perfil">Perfil</a>
            <a href="/login">Cerrar sesión</a>
          </div>
        </div>
        <div className="nav-menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
