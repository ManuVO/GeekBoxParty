import React from 'react';
import BracketTorneo from '../Components/torneos/BracketTorneo';
import NavigationBar from "../Components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Components/Footer";

const Torneos = () => {
    return (
        <>
            <NavigationBar />
            <div className="ver-torneos">
            <BracketTorneo />
            </div>
            <Footer />
        </>
    );
};

export default Torneos;