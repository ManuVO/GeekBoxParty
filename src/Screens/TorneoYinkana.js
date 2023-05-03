import React, { useState } from 'react';
import banderinYinkana from '../Assets/img/banderin-yinkana.png';
import NavigationBar from "../Components/NavigationBar";
import { useNavigate } from "react-router-dom";

const TorneoClasico = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    // const [juego, setJuego] = useState('');
    // const [jugadores_juego, setJugadores_juego] = useState(2);
    const [jugadores, setJugadores] = useState(2);
    const [numGames, setNumGames] = useState(2);
    const [selectedGames, setSelectedGames] = useState(Array(2).fill(''));
    const [duracion, setDuracion] = useState(1);
    const [tiempo, setTiempo] = useState(1);
    const [privacidad, setPrivacidad] = useState('');
    const [orden, setOrden] = useState('');
    const [menu_juego, setMenu_juego] = useState('MenuEstandar');
    const games = ['Conecta4', 'Sushi-Go', 'Tic-Tac-Toe'];

    const handleNumGamesChange = (e) => {
        setNumGames(parseInt(e.target.value, 10));
        setSelectedGames(Array(parseInt(e.target.value, 10)).fill(''));
    };

    const handleGameChange = (e, index) => {
        const newSelectedGames = [...selectedGames];
        newSelectedGames[index] = e.target.value;
        setSelectedGames(newSelectedGames);
    };

    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left media-middle">
                                <a href="#">
                                    <img src={banderinYinkana} alt="imagen izquierda" className="imagen-banderin-izquierda" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 style={{ color: '#0C8CE9' }}>Crea un torneo Yinkana</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre del Torneo:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="numGames">Numero de Juegos:</label>
                                <select className="form-control" id="numGames" value={numGames} onChange={handleNumGamesChange}>
                                    {[2, 3, 4, 5, 6].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            {Array.from({ length: numGames }, (_, i) => i + 1).map((gameIndex) => (
                                <div key={gameIndex}>
                                    <div className="form-group">
                                        <label htmlFor={`game\${gameIndex}`}>Juego {gameIndex}:</label>
                                        <select
                                            className={`form-control game-form-\${gameIndex}`}
                                            id={`game\${gameIndex}`}
                                            value={selectedGames[gameIndex - 1]}
                                            onChange={(e) => handleGameChange(e, gameIndex - 1)}
                                        >
                                            {games.map((game) => (
                                                <option key={game} value={game}>
                                                    {game}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {selectedGames[gameIndex - 1] === 'Sushi-Go' && (
                                        <>
                                            <div className="form-group">
                                                <label htmlFor={`playersGame\${gameIndex}`}>Jugadores Juego {gameIndex}:</label>
                                                <select className="form-control" id={`playersGame\${gameIndex}`}>
                                                    {[2, 3, 4, 5].map((num) => (
                                                        <option key={num} value={num}>
                                                            {num}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="menu_juego">Menú del Juego:</label>
                                                <select
                                                    className="form-control"
                                                    id="menu_juego"
                                                    value={menu_juego}
                                                    onChange={(e) => setMenu_juego(e.target.value)}
                                                >
                                                    <option value="MenuEstandar">Menu Estandar</option>
                                                    <option value="SinPalillos">Sin Palillos</option>
                                                    <option value="SinPuddings">Sin Puddings</option>
                                                    <option value="SinGyozas">Sin Gyozas</option>
                                                    <option value="SinSashimis">Sin Sashimis</option>
                                                </select>
                                            </div>
                                        </>
                                    )}
                                    <div className="form-group">
                                        <label htmlFor={`timeGame\${gameIndex}`}>Tiempo por Turno Juego {gameIndex} (Minutos):</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id={`timeGame\${gameIndex}`}
                                            max="2880"
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="form-group">
                                <label htmlFor="jugadores">Jugadores Torneo:</label>
                                <select
                                    className="form-control"
                                    id="jugadores"
                                    value={jugadores}
                                    onChange={(e) => setJugadores(parseInt(e.target.value))}
                                >
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="16">16</option>
                                    <option value="32">32</option>
                                    <option value="64">64</option>
                                    <option value="128">128</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="duracion">Duración (Días) Máx. 375:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="duracion"
                                    value={duracion}
                                    onChange={(e) => setDuracion(parseInt(e.target.value))}
                                    min="1"
                                    max="375"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="orden">Orden de los juegos:</label>
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="orden"
                                        onChange={(e) => setOrden(e.target.checked)}
                                    />
                                    <label className="custom-control-label" htmlFor="orden">
                                        {orden ? 'Ordenados' : 'Aleatorio'}
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="privacidad">Privacidad:</label>
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="privacidad"
                                        onChange={(e) => setPrivacidad(e.target.checked)}
                                    />
                                    <label className="custom-control-label" htmlFor="privacidad">
                                        {privacidad ? 'Privado' : 'Público'}
                                    </label>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-success"
                                    onClick={(event) =>
                                        navigate("/torneos")
                                    }
                                >
                                    Crear Torneo
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-right media-middle">
                                <a href="#">
                                    <img src={banderinYinkana} alt="imagen derecha" className="imagen-banderin-derecha" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TorneoClasico;
