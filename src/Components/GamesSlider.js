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
        "https://i.imgur.com/W5ORHOd.png",
      title: "3 en Raya",
      description: "Un clásico juego de estrategia para dos jugadores.",
      clickEvent: () => sliderClick("tictactoe"),
    },
    {
      image:
        "https://i.imgur.com/DnW7MIG.png",
      title: "Conecta 4",
      description: "Conecta cuatro fichas del mismo color en línea recta para ganar.",
      clickEvent: () => sliderClick("conecta4"),
    },
    {
      image:
        "https://i.imgur.com/ZMP5KV8.png",
      title: "Sushi Go",
      description: "Un divertido juego de cartas en el que debes recolectar el mejor sushi.",
      clickEvent: () => sliderClick("sushigo"),
    },
    {
      image:
        "https://i.imgur.com/0o8c50S.png",
      title: "Brisca",
      description: "Un popular juego de cartas en el que debes ganar tantos puntos como sea posible.",
      clickEvent: () => sliderClick("brisca"),
    },
    {
      image:
        "https://i.imgur.com/dvdxKk3.png",
      title: "Ajedrez",
      description: "El ajedrez es un juego de estrategia para dos jugadores que se juega en un tablero de 64 casillas de colores claros y oscuros, dispuestas en ocho filas y ocho columnas.",
      clickEvent: () => sliderClick("chess"),
    },
    {
      image:
        "https://i.imgur.com/AYxaQnI.png",
      title: "Parchís",
      description: "Juego de mesa tradicional español que se juega con dados y fichas, donde el objetivo es mover las fichas por el tablero hasta llevarlas a la meta antes que los demás jugadores.",
      clickEvent: () => sliderClick("parchis"),
    },

    {
      image:
        "https://i.imgur.com/gd1hoSc.png",
      title: "Exploding Kittens",
      description: "Es un juego de cartas de estrategia y suerte en el que los jugadores intentan evitar a toda costa ser eliminados por cartas de Gatitos Explosivos.",
      clickEvent: () => sliderClick("explodingkittens"),
    },
    {
      image:
        "https://i.imgur.com/aeASuSS.png",
      title: "Catán",
      description: "El objetivo del juego es conquistar la isla de Catán acumulando materias primas con las que podrás construir carreteras, pueblos y ciudades. Un juego en el que la estrategia y el talante negociador resultan fundamentales. Para muchos es el mejor juego de mesa de todos los tiempos.",
      clickEvent: () => sliderClick("catan"),
    },
    {
      image:
        "https://i.imgur.com/d5rN6sT.png",
      title: "Virus!",
      description: "Consigue completar un cuerpo sano, reuniendo en tu área de juego los cuatro órganos que propone el juego: cerebro, corazón, estómago y hueso.",
      clickEvent: () => sliderClick("virus"),
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
