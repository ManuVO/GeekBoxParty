import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import banderinClasico from '../../Assets/img/Clasico.png';
import banderinTemporada from '../../Assets/img/Temporadas.png';
import banderinYinkana from '../../Assets/img/Yinkana.png';


const TorneoCreate = () => {

    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleImageClick = (ruta) => {
        navigate(ruta);
        console.log('%c Click Imagen', 'color: blue; font-size: 20px;');
    };
    const handleImageTemporadaClick = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    }

    return (
        <>
            {showAlert && (
                <div className="alert alert-info alert-dismissible fade show alert-fixed" role="alert">
                    <strong>¡Los Torneos de Temporadas se crean automáticamente!</strong> Puedes unirte a ellos desde el menú superior, diviértete y buena suerte.
                    <button type="button" className="close" onClick={() => setShowAlert(false)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
            <div className="imagenes-contenedor">
                <img
                    src={banderinClasico}
                    alt="Imagen 1"
                    className="imagen"
                    onClick={() => handleImageClick('/torneos/creaClasico')}
                />
                <img
                    src={banderinTemporada}
                    alt="Imagen 2"
                    className="imagen"
                    onClick={handleImageTemporadaClick}
                />
                <img
                    src={banderinYinkana}
                    alt="Imagen 3"
                    className="imagen"
                    onClick={() => handleImageClick('/torneos/creaYinkana')}
                />
            </div>
        </>
    );
};

export default TorneoCreate;