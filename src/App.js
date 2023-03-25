import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Ranking from './Components/Ranking';
import GamesSection from './Components/GamesSection';
import GameScreen from './Screens/GameScreen'
import tictactoe from './Assets/img/tictactoe.png';

function App() {
  return (
    <GameScreen />
  );
}

export default App;