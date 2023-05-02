import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TorneoFilter = ({ setFilteredTorneos }) => {

    const torneos = [
        { juego: ['Conecta4'], nombre: 'Torneo Equipo LocalHost', tipo: 'Clásico', plazas: 1, jugadores: 8, duracion: 7, tiempoPorTurno: 60, organizador: 'Organizador 1' },
        { juego: ['Tic-Tac-Toe, Risk, Sushi-Go, Conecta4'], nombre: 'Torneo Los Cabezas', tipo: 'Yinkana', plazas: 3, jugadores: 16, duracion: 14, tiempoPorTurno: 120, organizador: 'Organizador 2' },
        { juego: ['Sushi-Go'], nombre: 'Temporadas Sushi-Go', tipo: 'Temporadas', plazas: 15, jugadores: 32, duracion: 1, tiempoPorTurno: 2, organizador: 'GeekBoxParty' },
        { juego: ['Risk'], nombre: 'Locos por el Risk', tipo: 'Clásico', plazas: 3, jugadores: 8, duracion: 7, tiempoPorTurno: 60, organizador: 'Organizador 1' },
        { juego: ['Risk', 'Brisca', 'Sushi-Go'], nombre: 'Torneo 2', tipo: 'Yinkana', plazas: 2, jugadores: 16, duracion: 14, tiempoPorTurno: 120, organizador: 'Organizador 2' },
        { juego: ['Sushi-Go'], nombre: 'Temporadas Sushi-Go', tipo: 'Temporadas', plazas: 25, jugadores: 32, duracion: 1, tiempoPorTurno: 2, organizador: 'GeekBoxParty' }
    ];
    


    // TorneoFilter.js
    const handleFilter = () => {
        const juego = document.getElementById('juego').value;
        const nombre = document.getElementById('nombre').value;
        const tipo = document.getElementById('tipo').value;
        const jugadores = parseInt(document.getElementById('jugadores').value);
        const duracion = parseInt(document.getElementById('duracion').value);
        const tiempoPorTurno = parseInt(document.getElementById('tiempoPorTurno').value);
        const organizador = document.getElementById('organizador').value;

        const torneosFiltrados = torneos.filter(torneo =>
            (juego === '' || torneo.juego.some(j => j === juego)) &&
            (nombre === '' || torneo.nombre === nombre) &&
            (tipo === '' || torneo.tipo === tipo) &&
            (isNaN(jugadores) || torneo.jugadores === jugadores) &&
            (isNaN(duracion) || torneo.duracion === duracion) &&
            (isNaN(tiempoPorTurno) || torneo.tiempoPorTurno === tiempoPorTurno) &&
            (organizador === '' || torneo.organizador === organizador)
        );
        

        setFilteredTorneos(torneosFiltrados);
    };


    return (
        <div className="container torneo-filter-container">
            <form className="torneo-filter row">
                <div className="col-md-3">
                    <label htmlFor="juego">Juego:</label>
                    <input type="text" id="juego" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="tipo">Tipo:</label>
                    <select id="tipo" className="form-select">
                        <option value="any">any</option>
                        <option value="Clásico">Clásico</option>
                        <option value="Yinkana">Yinkana</option>
                        <option value="Temporadas">Temporadas</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="jugadores">Jugadores:</label>
                    <select id="jugadores" className="form-select">
                        <option>any</option>
                        <option>2</option>
                        <option>4</option>
                        <option>8</option>
                        <option>16</option>
                        <option>32</option>
                        <option>64</option>
                        <option>128</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="duracion">Duración (Días):</label>
                    <input type="number" id="duracion" min="1" max="375" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="tiempoPorTurno">Tiempo por Turno (Minutos):</label>
                    <input type="number" id="tiempoPorTurno" min="1" max="2880" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="organizador">Organizador:</label>
                    <input type="text" id="organizador" className="form-control" />
                </div>
                <div className="col-md-3 d-flex align-items-end">
                    <button onClick={handleFilter} className="btn btn-primary">Filtrar</button>
                </div>
            </form>
        </div>
    );
};

export default TorneoFilter;
