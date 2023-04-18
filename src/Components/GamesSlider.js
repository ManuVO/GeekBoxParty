//import ReactCardSlider from 'react-card-slider-component';
import ReactCardSlider from './ReactCardSlider';
import imagen1 from '../assets/img/tictactoe.png';
import { Link, useNavigate } from "react-router-dom";

//Funcion de lo que ocurre cuando haces click en una imagen


export default function GameSlider() {
  const navigate = useNavigate();
  const juego = "/GameScreen";
  function sliderClick() {

    if(juego!=null)
      navigate(juego);
  
  }
    // a slide object contains the image link, title and function/click event for when a user clicks on a card
    const slides = [
        { image: "https://play-lh.googleusercontent.com/1BY66vvf7fq1-huDAsJayeOmvOXk0OzuO_jUGGVdMBgObjrtTb7evTl6f_RCxs9g7eo", title: "3 en Raya", description: "This is a description", clickEvent: sliderClick},
        { image: "https://http2.mlstatic.com/D_NQ_NP_890373-MCO31001523399_062019-O.webp", title: "Conecta 4", description: "Conecta 4", clickEvent: sliderClick},
        { image: "https://play-lh.googleusercontent.com/ZOiteEBaiWRRej4jaVUTuTl86C6G35nLEzv0FSTnsJqjxzDxmQkdMd5vdy8iecT1XEI1", title: "Brisca", description: "This is a fourth description", clickEvent: sliderClick },
        { image: "https://i0.wp.com/is1-ssl.mzstatic.com/image/thumb/Purple123/v4/83/d5/64/83d56429-fa15-2edc-b547-80dc05586dbf/A-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg?w=1200&ssl=1", title: "Solitario", description: "This is a fifth description", clickEvent: sliderClick },
        { image: "https://play-lh.googleusercontent.com/ngTyk7oHMyHgdaDLWJ7iJ_CtvZvjU5pYn-bugNpGOrzxjNU4dxIavkoeP4F0Zao2HQ", title: "Ajedrez", description: "Descripcion", clickEvent: sliderClick },
        { image: "https://github.com/ManuVO/GeekBoxParty/blob/master/src/Assets/img/tictactoe.png?raw=true", title: "Tic Tac Toe", description: "Descripcion", clickEvent: sliderClick },
    ]

    //Estilo para centrarlo en la pantalla
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      };

    return (
        <div className="Slider" style={styles}>
        <ReactCardSlider slides={slides}/>
      </div>
    );
}