import React, { useState } from 'react';
import TorneoList from '../Components/torneos/TorneoList';
import TorneoFilter from '../Components/torneos/TorneoFilter';
import TorneoCreate from '../Components/torneos/TorneoCreate';
import NavigationBar from "../Components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Torneos.css';
import Footer from "../Components/Footer";

const Torneos = () => {
    const [filteredTorneos, setFilteredTorneos] = useState([]);


    return (
        <>
            <NavigationBar />
            <div className="torneos">
                <h1>¡Únete a un Torneo!</h1>
                <h2>Torneos a punto de comenzar</h2>
                <div className="torneos-content">
                    <TorneoFilter setFilteredTorneos={setFilteredTorneos} />
                    <TorneoList torneos={filteredTorneos} />
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <h2>¡Únete mediante un código!</h2>
                    <input type="text" class="codigo-input" placeholder="Introduce el código" />
                    <button class="btn btn-success mt-3">UNIRTE</button>
                </div>
                <h1>¡Crea un Torneo!</h1>
                <TorneoCreate />
            </div>
            <Footer />
        </>
    );
};

export default Torneos;
