import React, { useState } from 'react';
import './GamesSection.css';

function GameSquare(props) {
  return (
    <div className="game-square">
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
}

function GamesSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const games = [
    {
      id: 1,
      title: 'Juego X',
      image: 'https://via.placeholder.com/200',
      description: 'Descripción del juego 1',
    },
    {
      id: 2,
      title: 'Juego 2',
      image: 'https://via.placeholder.com/200',
      description: 'Descripción del juego 2',
    },
    {
      id: 3,
      title: 'Juego 3',
      image: 'https://via.placeholder.com/200',
      description: 'Descripción del juego 3',
    },
    {
      id: 4,
      title: 'Juego 4',
      image: 'https://via.placeholder.com/200',
      description: 'Descripción del juego 4',
    },
    {
      id: 5,
      title: 'Juego 5',
      image: 'https://via.placeholder.com/200',
      description: 'Descripción del juego 5',
    },
    {
      id: 6,
      title: 'Juego 6',
      image: 'https://via.placeholder.com/200',
      description: 'Descripción del juego 6',
    },
  ];

  const showPrevGames = () => {
    if (slideIndex === 0) {
      setSlideIndex(games.length - 3);
    } else {
      setSlideIndex(slideIndex - 3);
    }
  };

  const showNextGames = () => {
    if (slideIndex === games.length - 3) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 3);
    }
  };

  return (
    <section>
      <h2>Juegos</h2>
      <div className="game-squares">
        {games.slice(slideIndex, slideIndex + 3).map((game) => (
          <GameSquare key={game.id} title={game.title} image={game.image} description={game.description} />
        ))}
        <div className="slider-arrows">
          <span className="slider-arrow slider-prev-arrow" onClick={showPrevGames}>
            {/* &#8249; */}
          </span>
          <span className="slider-arrow slider-next-arrow" onClick={showNextGames}>
            {/* &#8250; */}
          </span>
        </div>
      </div>
    </section>
  );
}

export default GamesSection;