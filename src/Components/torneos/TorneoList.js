import React, { useEffect } from 'react';
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
                                <button className="btn btn-success">Unirte</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TorneoList;
