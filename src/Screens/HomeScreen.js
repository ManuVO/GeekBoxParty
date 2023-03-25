import '../App.css';
import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GamesSection from '../Components/GamesSection';
import { useState, useEffect } from "react";


function HomeScreen() {

  // BBDD comienza aquí
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => {
        // Crear un nuevo objeto JSON con solo los campos deseados
        const newData = data.map(({ idUser, email, pass }) => ({ idUser, email, pass }));
        setData(newData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // BBDD finaliza aquí

  return (
    <>

      <div>
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
      </div>

      <div className="App">
        <NavigationBar />
        <Ranking />
        <GamesSection />
      </div>
    </>
  );
}

export default HomeScreen;