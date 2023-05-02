import React from 'react';
import { Container } from 'react-bootstrap';
import GameCard from '../Components/GameCard';
import NavigationBar from '../Components/NavigationBar';

function AllGames() {
  const games = [
    {
      id: 'tictactoe',
      title: 'Tres en raya',
      description: 'El tres en raya es un juego de mesa para dos jugadores que se juega en un tablero de 3x3 casillas. Cada jugador marca alternadamente una casilla con su símbolo (generalmente una X y un O) con el objetivo de conseguir tres símbolos en línea, ya sea horizontal, vertical o diagonalmente, antes que su oponente. Es un juego sencillo pero muy popular y divertido.',
      image: 'https://i.imgur.com/ucxy7Dd.png',
    },
    {
      id: 'conecta4',
      title: 'Conecta 4',
      description: 'Conecta 4 es un juego de dos jugadores en el que el objetivo es turnarse y marcar los espacios correctos en una cuadrícula de 6x7. Puedes jugar contra otro jugador o contra la máquina para prácticar.',
      image: 'https://i.imgur.com/dkDI0aG.jpg',
    },
    {
      id: 'sushigo',
      title: 'Sushi Go',
      description: 'Un divertido juego de cartas en el que debes recolectar el mejor sushi.',
      image: 'https://i.imgur.com/j3npLEQ.jpg',
    },
    {
      id: 'brisca',
      title: 'Brisca',
      description: 'La Brisca es un juego de naipes popular en España e Italia que implica ganar bazas para acumular puntos utilizando una baraja de 40 cartas con valores numéricos y jerarquías. Es un juego estratégico y emocionante que se juega a menudo en parejas.',
      image: 'https://i.imgur.com/hVkjqlP.png',
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
    </>
  );
}

export default AllGames;