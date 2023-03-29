//import Mayuscula al empezar SIEMPRE.
// import Conecta4 from "./Games/conecta4/conecta4";
// import Tictactoe from "./Games/tictactoe/tictactoe.js";
import HomeScreen from "./Screens/HomeScreen";
import GameScreen from "./Screens/GameScreen";

// import Rules from "./Games/conecta4/pages/rules/Rules";
// import InGame from "./Games/conecta4/inGame/InGame";
//import GameScreen from "./Screens/GameScreen";
import NotFound from "./Games/conecta4/pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
    {/* <Route path="/inGame" element={<InGame />} />
    <Route path="/rules" element={<Rules />} /> */}
    <Route path="/GameScreen" element={<GameScreen />} />
    <Route path="/" element={<HomeScreen />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  );
}

export default App;
