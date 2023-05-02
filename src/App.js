//import Mayuscula al empezar SIEMPRE.
// import Conecta4 from "./Games/conecta4/conecta4";
// import Tictactoe from "./Games/tictactoe/tictactoe.js";
//import HomeScreen from "./Screens/HomeScreen";
//import GameScreen from "./Screens/GameScreen";

// import Rules from "./Games/conecta4/pages/rules/Rules";
// import InGame from "./Games/conecta4/inGame/InGame";
//import GameScreen from "./Screens/GameScreen";
//import NotFound from "./Games/conecta4/pages/notFound/NotFound";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import GameScreen from "./Screens/GameScreen";
import Torneos from "./Screens/Torneos";
import CreaTorneoClasico from "./Screens/TorneoClasico";
import CreaTorneoYinkana from "./Screens/TorneoYinkana";
import NotFound from "./Games/conecta4/pages/notFound/NotFound";
import Perfil from './Screens/Perfil';
import Games from "./Screens/AllGames";


function App() {
  const [auth, setAuth] = useState(true);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/game/:game/*" element={<GameScreen />} />
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/torneos/creaClasico" element={<CreaTorneoClasico />} />
        <Route path="/torneos/creaYinkana" element={<CreaTorneoYinkana />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="*" element={<NotFound />} />
        <Route
              path="/"
              element={
                auth ? (
                  <Home setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" state={{ from: location }} replace />
                )
              }
            />
      </Routes>
    </>
  );
}

export default App;
