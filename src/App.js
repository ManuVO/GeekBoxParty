//import Mayuscula al empezar SIEMPRE.
// import Conecta4 from "./Games/conecta4/conecta4";
// import Tictactoe from "./Games/tictactoe/tictactoe.js";
import HomeScreen from "./Screens/HomeScreen";
import GameScreen from "./Screens/GameScreen";

// import Rules from "./Games/conecta4/pages/rules/Rules";
// import InGame from "./Games/conecta4/inGame/InGame";
//import GameScreen from "./Screens/GameScreen";
import NotFound from "./Games/conecta4/pages/notFound/NotFound";
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/game/*" element={<GameScreen />} />
      </Routes>
  );
}
export default App;