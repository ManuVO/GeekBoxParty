import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Ranking from './Components/Ranking';
import GamesSection from './Components/GamesSection';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Ranking />
      <GamesSection />
    </div>
  );
}

export default App;