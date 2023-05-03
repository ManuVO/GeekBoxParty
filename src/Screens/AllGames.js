import React from 'react';
import { Container } from 'react-bootstrap';
import GameCard from '../Components/GameCard';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';

function AllGames() {
  const games = [
    {
      id: 'tictactoe',
      title: 'Tres en raya',
      description: 'El tres en raya es un juego de mesa para dos jugadores que se juega en un tablero de 3x3 casillas. Cada jugador marca alternadamente una casilla con su símbolo (generalmente una X y un O) con el objetivo de conseguir tres símbolos en línea, ya sea horizontal, vertical o diagonalmente, antes que su oponente. Es un juego sencillo pero muy popular y divertido.',
      image: 'https://i.imgur.com/W5ORHOd.png',
    },
    {
      id: 'conecta4',
      title: 'Conecta 4',
      description: 'Conecta 4 es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 6x7. Puedes jugar contra otro jugador o contra la máquina para prácticar.',
      image: 'https://i.imgur.com/DnW7MIG.png',
    },
    {
      id: 'sushigo',
      title: 'Sushi Go',
      description: 'Un divertido juego de cartas en el que debes recolectar el mejor sushi.',
      image: 'https://i.imgur.com/ZMP5KV8.png',
    },
    {
      id: 'brisca',
      title: 'Brisca',
      description: 'La Brisca es un juego de naipes popular en España e Italia que implica ganar bazas para acumular puntos utilizando una baraja de 40 cartas con valores numéricos y jerarquías. Es un juego estratégico y emocionante que se juega a menudo en parejas.',
      image: 'https://i.imgur.com/0o8c50S.png',
    },
    {
      id: 'ajedrez',
      title: 'Ajedrez',
      description: "El ajedrez es un juego de estrategia para dos jugadores que se juega en un tablero de 64 casillas de colores claros y oscuros, dispuestas en ocho filas y ocho columnas.",
      image: 'https://i.imgur.com/dvdxKk3.png',
    },
    {
      id: 'explodingkittens',
      title: 'Exploding Kittens',
      description: "Es un juego de cartas de estrategia y suerte en el que los jugadores intentan evitar a toda costa ser eliminados por cartas de Gatitos Explosivos.",
      image: 'https://i.imgur.com/gd1hoSc.png',
    },
    {
      id: 'parchis',
      title: 'Parchis',
      description: "Juego de mesa tradicional español que se juega con dados y fichas, donde el objetivo es mover las fichas por el tablero hasta llevarlas a la meta antes que los demás jugadores.",
      image: 'https://i.imgur.com/AYxaQnI.png',
    },
    {
      id: 'catan',
      title: 'Catán',
      description: "El objetivo del juego es conquistar la isla de Catán acumulando materias primas con las que podrás construir carreteras, pueblos y ciudades. Un juego en el que la estrategia y el talante negociador resultan fundamentales. Para muchos es el mejor juego de mesa de todos los tiempos.",
      image: 'https://i.imgur.com/aeASuSS.png',
    },
    {
      id: 'virus',
      title: 'Virus!',
      description: "Consigue completar un cuerpo sano, reuniendo en tu área de juego los cuatro órganos que propone el juego: cerebro, corazón, estómago y hueso.",
      image: 'https://i.imgur.com/d5rN6sT.png',
    },
  ];

  return (
    <>
      <NavigationBar />
      <Container>
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default AllGames;