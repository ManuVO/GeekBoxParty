import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Sushigoimg from '../../Assets/img/sushigo.jpg';
import './Sushigo.css';

const Sushigo = () => {
  const players = [
    { username: 'Jugador 1', ronda: 1, puntosrondaactual: 10, puntosactuales: 20, numcartas: 5 },
    { username: 'Jugador 2', ronda: 1, puntosrondaactual: 15, puntosactuales: 25, numcartas: 4 },
    { username: 'Jugador 3', ronda: 1, puntosrondaactual: 12, puntosactuales: 22, numcartas: 6 },
    { username: 'Jugador 4', ronda: 1, puntosrondaactual: 8, puntosactuales: 18, numcartas: 3 },
  ];

  const playerCardStyles = {
    topLeft: {
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      border: '1px solid rgba(75, 192, 192, 0.8)',
    },
    topRight: {
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      border: '1px solid rgba(255, 159, 64, 0.8)',
    },
    bottomLeft: {
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      border: '1px solid rgba(153, 102, 255, 0.8)',
    },
    bottomRight: {
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      border: '1px solid rgba(255, 206, 86, 0.8)',
    },
  };

  const renderPlayerCard = (player, position) => (
    <Card style={playerCardStyles[position]}>
      <Card.Body>
        <Card.Title>{player.username}</Card.Title>
        <Card.Subtitle>Ronda: {player.ronda}</Card.Subtitle>
        <Card.Text>
          Puntos ronda actual: {player.puntosrondaactual}
          <br />
          Puntos actuales: {player.puntosactuales}
          <br />
          Número de cartas: {player.numcartas}
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <div className="sushigo">
      <Container fluid>
        <Row>
          <Col md={3}>
            {renderPlayerCard(players[0], 'topLeft')}
          </Col>
          <Col md={6}></Col>
          <Col md={3}>
            {renderPlayerCard(players[1], 'topRight')}
          </Col>
        </Row>

        <Row className="d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <img src={Sushigoimg} alt="Sushigo game" className="sushigo-image img-fluid" />
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            {renderPlayerCard(players[2], 'bottomLeft')}
          </Col>
          <Col md={6}></Col>
          <Col md={3}>
            {renderPlayerCard(players[3], 'bottomRight')}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sushigo;
