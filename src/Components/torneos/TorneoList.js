import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TorneoList = ({ torneos }) => {
    useEffect(() => {
        console.log('Torneos filtrados:', torneos);
    }, [torneos]);

    const torneos2 = [
        { juego: ['Conecta4'], nombre: 'Torneo Equipo LocalHost', tipo: 'Clásico', plazas: 1, jugadores: 8, duracion: 7, tiempoPorTurno: 60, organizador: 'Organizador 1' },
        { juego: ['Tic-Tac-Toe, Risk, Sushi-Go, Conecta4'], nombre: 'Torneo Los Cabezas', tipo: 'Yinkana', plazas: 3, jugadores: 16, duracion: 14, tiempoPorTurno: 120, organizador: 'Organizador 2' },
        { juego: ['Sushi-Go'], nombre: 'Temporadas Sushi-Go', tipo: 'Temporadas', plazas: 15, jugadores: 32, duracion: 1, tiempoPorTurno: 2, organizador: 'GeekBoxParty' },
        { juego: ['Risk'], nombre: 'Locos por el Risk', tipo: 'Clásico', plazas: 3, jugadores: 8, duracion: 7, tiempoPorTurno: 60, organizador: 'Organizador 1' },
        { juego: ['Risk', 'Brisca', 'Sushi-Go'], nombre: 'Torneo 2', tipo: 'Yinkana', plazas: 2, jugadores: 16, duracion: 14, tiempoPorTurno: 120, organizador: 'Organizador 2' },
        { juego: ['Sushi-Go'], nombre: 'Temporadas Sushi-Go', tipo: 'Temporadas', plazas: 25, jugadores: 32, duracion: 1, tiempoPorTurno: 2, organizador: 'GeekBoxParty' }
    ];

    const [joinState, setJoinState] = useState(new Array(torneos2.length).fill(false));
    const [showMessage, setShowMessage] = useState({ index: null, text: '' });

    const handleButtonClick = (index) => {
        setJoinState((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });

        const message = joinState[index] ? (
            <span className="text-danger p-2 rounded" style={{ backgroundColor: '#dc3545 !important' }}>
                Has abandonado el torneo
            </span>
        ) : (
            <span>
                ¡Te has unido al torneo, buena suerte!
            </span>
        );

        setShowMessage({ index, text: message });

        setTimeout(() => {
            setShowMessage({ index: null, text: '' });
        }, 3000);
    };

    return (
        <div className="container">
            <table className="table table-striped table-bordered torneos-list">
                <thead className="thead-dark">
                    <tr>
                        <th>Juego</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Plazas</th>
                        <th>Jug.Totales</th>
                        <th>Duración (Días)</th>
                        <th>Tiempo por Turno (Min.)</th>
                        <th>Organizador</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {torneos2.map((torneo, index) => (
                        <tr key={index}>
                            <td className={`game-form-\${index}`}>
                                {torneo.juego && torneo.juego.map((juego) => juego).join(', ')}
                            </td>
                            <td>{torneo.nombre}</td>
                            <td>{torneo.tipo}</td>
                            <td>{torneo.plazas}</td>
                            <td>{torneo.jugadores}</td>
                            <td>{torneo.duracion}</td>
                            <td>{torneo.tiempoPorTurno}</td>
                            <td>{torneo.organizador}</td>
                            <td>
                                <button className="btn btn-primary mr-2">Ver Torneo</button>
                                <button
                                    className={`btn ${joinState[index] ? 'btn-danger' : 'btn-success'} mr-2 mt-1`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {joinState[index] ? 'Cancelar' : 'Unirte'}
                                </button>

                                {showMessage.index === index && (
                                    <div className="alert alert-info mt-2" role="alert">
                                        {showMessage.text}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TorneoList;
