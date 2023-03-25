import Game from '../Assets/games/'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function GameContainer() {

  const gameFolder = "tictactoe"; // variable para determinar la carpeta del juego y su archivo .js correspondiente
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'../Assets/games/{gameFolder}/${gameFolder}.js'} component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default GameContainer;