import React, { useState } from 'react';
import banderinClasico from '../Assets/img/banderin-clasico.png';
import NavigationBar from "../Components/NavigationBar";
import { useNavigate } from "react-router-dom";

const TorneoClasico = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [juego, setJuego] = useState('');
    const [jugadores_juego, setJugadores_juego] = useState(2);
    const [jugadores, setJugadores] = useState(2);
    const [duracion, setDuracion] = useState(1);
    const [tiempo, setTiempo] = useState(1);
    const [privacidad, setPrivacidad] = useState('');
    const [menu_juego, setMenu_juego] = useState('MenuEstandar');


    const handleJuegoChange = (event) => {
        setJuego(event.target.value);
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
                                    <img src={banderinClasico} alt="imagen izquierda" className="imagen-banderin-izquierda" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 style={{ color: '#0C8CE9' }}>Crea un torneo Clásico</h1>
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
                                <label htmlFor="juego">Juego:</label>
                                <select className="form-control" id="juego" value={juego} onChange={handleJuegoChange}>
                                    <option value="">Selecciona un juego</option>
                                    <option value="Sushi-Go">Sushi-Go</option>
                                    <option value="Conecta4">Conecta4</option>
                                    <option value="Tic-Tac-Toe">Tic-Tac-Toe</option>
                                </select>
                            </div>
                            {juego === 'Sushi-Go' && (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="jugadores_juego">Número de Jugadores:</label>
                                        <select
                                            className="form-control"
                                            id="jugadores_juego"
                                            value={jugadores_juego}
                                            onChange={(e) => setJugadores_juego(parseInt(e.target.value))}
                                        >
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
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
                                <label htmlFor="tiempo">Tiempo por Turno (Minutos) Máx. 2880, 48h:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="tiempo"
                                    value={tiempo}
                                    onChange={(e) => setTiempo(parseInt(e.target.value))}
                                    min="1"
                                    max="2880"
                                />
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
                                    <img src={banderinClasico} alt="imagen derecha" className="imagen-banderin-derecha" />
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
