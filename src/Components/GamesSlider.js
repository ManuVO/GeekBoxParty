//import ReactCardSlider from 'react-card-slider-component';
import ReactCardSlider from "./ReactCardSlider";
import imagen1 from "../Assets/img/tictactoe.png";
import { Link, useNavigate } from "react-router-dom";

//Funcion de lo que ocurre cuando haces click en una imagen

export default function GameSlider() {
  const navigate = useNavigate();
  function sliderClick(juego) {
    navigate(`/game/${juego}`);
  }
  // a slide object contains the image link, title and function/click event for when a user clicks on a card
  const slides = [
    {
      image:
        "https://i.imgur.com/ucxy7Dd.png",
      title: "3 en Raya",
      description: "Un clásico juego de estrategia para dos jugadores.",
      clickEvent: () => sliderClick("tictactoe"),
    },
    {
      image:
        "https://i.imgur.com/dkDI0aG.jpg",
      title: "Conecta 4",
      description: "Conecta cuatro fichas del mismo color en línea recta para ganar.",
      clickEvent: () => sliderClick("conecta4"),
    },
    {
      image:
        "https://i.imgur.com/j3npLEQ.jpg",
      title: "Sushi Go",
      description: "Un divertido juego de cartas en el que debes recolectar el mejor sushi.",
      clickEvent: () => sliderClick("sushigo"),
    },
    {
      image:
        "https://i.imgur.com/hVkjqlP.png",
      title: "Brisca",
      description: "Un popular juego de cartas en el que debes ganar tantos puntos como sea posible.",
      clickEvent: () => sliderClick("brisca"),
    },
    {
      image:
        "https://play-lh.googleusercontent.com/ngTyk7oHMyHgdaDLWJ7iJ_CtvZvjU5pYn-bugNpGOrzxjNU4dxIavkoeP4F0Zao2HQ",
      title: "Ajedrez",
      description: "Descripcion",
      clickEvent: () => sliderClick("chess"),
    },
    {
      image:
        "https://github.com/ManuVO/GeekBoxParty/blob/master/src/Assets/img/tictactoe.png?raw=true",
      title: "Tic Tac Toe",
      description: "Descripcion",
      clickEvent: () => sliderClick("tictactoe"),
    },
  ];

  //Estilo para centrarlo en la pantalla
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  };

  return (
    <div className="Slider" style={styles}>
      <ReactCardSlider slides={slides} />
    </div>
  );
}
