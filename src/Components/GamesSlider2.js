import ReactCardSlider2 from 'react-card-slider-component';
import imagen1 from '../Assets/img/tictactoe.png';

//Funcion de lo que ocurre cuando haces click en una imagen
function sliderClick(juego) {

}

export default function GameSlider() {
    // a slide object contains the image link, title and function/click event for when a user clicks on a card
    const slides = [
        { image: "https://play-lh.googleusercontent.com/1BY66vvf7fq1-huDAsJayeOmvOXk0OzuO_jUGGVdMBgObjrtTb7evTl6f_RCxs9g7eo", title: "3 en Raya", description: "This is a description", clickEvent: sliderClick},
        { image: "https://http2.mlstatic.com/D_NQ_NP_890373-MCO31001523399_062019-O.webp", title: "Conecta 4", description: "Conecta 4", clickEvent: sliderClick },
        { image: "https://play-lh.googleusercontent.com/ZOiteEBaiWRRej4jaVUTuTl86C6G35nLEzv0FSTnsJqjxzDxmQkdMd5vdy8iecT1XEI1", title: "Brisca", description: "This is a fourth description", clickEvent: sliderClick }
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
        <ReactCardSlider2 slides={slides}/>
      </div>
    );
}