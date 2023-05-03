import React from 'react';
import BracketTorneo from '../Components/torneos/BracketTorneo';
import PremiosTorneo from '../Components/torneos/PremiosTorneo';
import NavigationBar from "../Components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Components/Footer";

const Torneos = () => {
    return (
        <>
            <NavigationBar />
            <div className="d-flex">
                <div className="mx-auto my-3">
                    <PremiosTorneo />
                </div>
            </div>
            <div className="ver-torneos">
                <BracketTorneo />
            </div>
            <Footer />
        </>
    );
};

export default Torneos;
