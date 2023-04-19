// import '../App.css';

import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GamesSection from '../Components/GamesSection';
import GameSliders from '../Components/GamesSlider';
import Separator from '../Components/Separator';
import { useState } from "react";
import { useFetch } from "../Components/useFetch";

function HomeScreen() {
  // BBDD simplificado comienza aquí
  const { data, loading } = useFetch('http://localhost:5000/users')

  // BBDD simplificado finaliza aquí

  return (

    <>
      {/*BASE DE DATOS EJEMPLO COMENTADA
       <div>
        <p>
          {
            loading ? "Loading..." : (data ? (
              // Mostrar los datos en la interfaz de usuario
              <>
                {data.map(({ idUser, email, pass }) => (
                  <div key={email}>
                    <p>idUser: {idUser}</p>
                    <p>Email: {email}</p>
                    <p>Contraseña: {pass}</p>
                  </div>
                ))}

                <p>{JSON.stringify(data)}</p>

              </>
            ) : (
              // Mostrar un mensaje si no hay users
              <p>No hay users</p>
            ))
          }
        </p>
      </div> */}

      {/* <div>
        {data ? (
          // Mostrar los datos en la interfaz de usuario
          <>
            {data.map(({ idUser, email, pass }) => (
              <div key={email}>
                <p>idUser: {idUser}</p>
                <p>Email: {email}</p>
                <p>Contraseña: {pass}</p>
              </div>
            ))}

            <p>{JSON.stringify(data)}</p>

          </>
        ) : (
          // Mostrar un mensaje si no hay users
          <p>No hay users</p>
        )}
      </div> */}

      <div className="Home">
        <NavigationBar />
        <div style={{ marginTop: '20px' }}>
          <Ranking />
        </div>
        <Separator /> {/* Utiliza Separator */}
        <GameSliders />
      </div>
    </>
  );
}

export default HomeScreen;