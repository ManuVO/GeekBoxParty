import '../App.css';
import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Ranking from '../Components/Ranking';
import GamesSection from '../Components/GamesSection';


function HomeScreen() {
  return (
    <div className="App">
      <NavigationBar />
      <Ranking />
      <GamesSection />
    </div>
  );
}

export default HomeScreen;
