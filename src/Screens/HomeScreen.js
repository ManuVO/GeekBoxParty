// import '../App.css';
import ReactDOM from "react-dom/client";
import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GameSliders from '../Components/GamesSlider';
import Separator from '../Components/Separator';
import { useState } from "react";
import { useFetch } from "../Components/useFetch";
import Footer from "../Components/Footer";

function HomeScreen() {
  // BBDD simplificado comienza aquí
  const { data, loading } = useFetch('http://localhost:5000/users')

  return (
    <>
      <div className="Home">
        <NavigationBar />
        <div style={{ marginTop: '20px' }}>
          {/* <Ranking /> */}
        </div>
        <Separator /> {/* Utiliza Separator */}
        <GameSliders />
        <Footer />
      </div>
    </>
  );
}

export default HomeScreen;