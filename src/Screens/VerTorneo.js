import React, { useState } from 'react';
import BracketTorneo from '../Components/torneos/BracketTorneo';
import PremiosTorneo from '../Components/torneos/PremiosTorneo';
import NavigationBar from "../Components/NavigationBar";
import TorneoTemporada from '../Assets/img/temporadaSushiGo.png';
import Footer from "../Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Torneos = () => {
    const [isStarted, setIsStarted] = useState(false);

    const toggleStarted = () => {
        setIsStarted(!isStarted);
    };

    return (
        <>
            <NavigationBar />
            <div className="d-flex">
                <div className="mx-auto my-3">
                    <img
                        src={TorneoTemporada}
                        alt="Torneo Temporada"
                        style={{ width: '500px', height: '300px' }}
                    />
                </div>
            </div>
            <div className="d-flex">
                <div className="mx-auto my-3">
                    <PremiosTorneo />
                </div>
            </div>
            <div className="ver-torneos">
                <BracketTorneo />
            </div>
            <div className="container my-3">
                <div className="card">
                    <div className="card-header">
                        Normas del Torneo
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tipo de Torneo: Temporadas</li>
                        <li className="list-group-item">Juego: Sushi Go!</li>
                        <li className="list-group-item">Menú del juego: Estándar, todas las cartas incluidas.</li>
                        <li className="list-group-item">Duración Partida: 24h máximo</li>
                        <li className="list-group-item">Duración por Turno: 2 minutos</li>
                        <li className="list-group-item">Nº Jugadores: 32</li>
                        <li className="list-group-item">Organizador: GeekBoxParty</li>
                        <li className="list-group-item">Estado Actual: {isStarted ? 'Empezado' : 'No empezado'}</li>
                    </ul>
                    <div className="card-body">
                        {isStarted ? (
                            <button className="btn btn-danger" onClick={toggleStarted}>
                                Cancelar
                            </button>
                        ) : (
                            <button className="btn btn-success" onClick={toggleStarted}>
                                Apuntarse
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Torneos;