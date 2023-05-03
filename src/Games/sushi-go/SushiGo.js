import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ComponenteLog from '../../Components/Log';
import ComponenteContador from '../../Components/Contador'
import Sushigoimg from '../../Assets/img/sushigo.jpg';
import './Sushigo.css';

import avatarImg from '../../Assets/img/avatar.png';

class Sushigo extends Component {
  // ...otros métodos y variables
  state = {
    logMounted: false,
  };

  componentDidMount() {
    this.setState({ logMounted: true }, () => {
      // Líneas preestablecidas
      const lines = [
        { nick: 'Juego', text: '--COMIENZA RONDA 2--' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 1---' },
        { nick: 'AriaHG', text: 'Juega Makix1' },
        { nick: 'Mircan', text: 'Juega Sashimi' },
        { nick: 'ManuTNT', text: 'Juega Makix3' },
        { nick: 'JoakiGPI', text: 'Juega Tempura' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 2---' },
        { nick: 'AriaHG', text: 'Juega Makix2' },
        { nick: 'Mircan', text: 'Juega Nigiri Tortilla' },
        { nick: 'ManuTNT', text: 'Juega Makix2' },
        { nick: 'JoakiGPI', text: 'Juega Gyoza' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 3---' },
        { nick: 'AriaHG', text: 'Juega Wasabi' },
        { nick: 'Mircan', text: 'Juega Tempura' },
        { nick: 'ManuTNT', text: 'Juega Makix2' },
        { nick: 'JoakiGPI', text: 'Juega Gyoza' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 4---' },
        { nick: 'AriaHG', text: 'Juega Wasabi' },
        { nick: 'Mircan', text: 'Nigiri Sashimi' },
        { nick: 'ManuTNT', text: 'Juega Tempura' },
        { nick: 'JoakiGPI', text: 'Juega Pudding' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 5---' },
        { nick: 'AriaHG', text: 'Juega Nigiri Calamar' },
        { nick: 'Mircan', text: 'Nigiri Tempura' },
        { nick: 'ManuTNT', text: 'Juega Tempura' },
        { nick: 'JoakiGPI', text: 'Juega Gyoza' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 6---' },
        { nick: 'AriaHG', text: 'Juega Nigiri Calamar' },
        { nick: 'Mircan', text: 'Nigiri Sashimi' },
        { nick: 'ManuTNT', text: 'Juega Pudding' },
        { nick: 'JoakiGPI', text: 'Juega Gyoza' },
        { nick: 'Juego', text: '---RONDA 2---CARTA 7---' },
        { nick: 'AriaHG', text: 'Juega Nigiri Salmon' },
        { nick: 'Mircan', text: 'Nigiri Nigiri Salmon' },
        { nick: 'ManuTNT', text: 'Juega Makix1' },
        { nick: 'JoakiGPI', text: 'Juega Nigiri Salmon' },
        { nick: 'Juego', text: '--FINALIZA RONDA 2--' },
        { nick: 'Juego', text: '--COMIENZA RONDA 3--' },


      ];

      lines.forEach(({ nick, text }) => {
        this.handleNewLine(nick, text);
      });
    });
  }

  handleNewLine = (nick, line) => {
    if (this.state.logMounted) {
      this.componenteLogRef.addLine(nick, line);
    }
  };

  render() {

    const players = [
      { username: 'AriaHG', ronda: 2, puntosrondaactual: 10, puntosactuales: 20, numcartas: 1 },
      { username: 'Mircan', ronda: 2, puntosrondaactual: 15, puntosactuales: 25, numcartas: 1 },
      { username: 'ManuTNT', ronda: 2, puntosrondaactual: 12, puntosactuales: 22, numcartas: 1 },
      { username: 'JoakiGPI', ronda: 2, puntosrondaactual: 8, puntosactuales: 18, numcartas: 1 },
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
          <div className="d-flex justify-content-between align-items-center">
            <div className="card-content">
              <Card.Title>{player.username}</Card.Title>
              <Card.Subtitle>Ronda: {player.ronda}</Card.Subtitle>
              <Card.Text>
                Puntos ronda actual: {player.puntosrondaactual}
                <br />
                Puntos actuales: {player.puntosactuales}
                <br />
                Número de cartas: {player.numcartas}
              </Card.Text>
            </div>
            <img src={avatarImg} alt="Avatar" className="avatar-marcador" />
          </div>
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
            <Col md={6}>
              <ComponenteContador />
            </Col>
            <Col md={3}>
              {renderPlayerCard(players[1], 'topRight')}
            </Col>
          </Row>

          <Row className="d-flex justify-content-center align-items-center">
            <Col md={3}>
              {/* vacio */}
            </Col>
            <Col className="text-center">
              <img src={Sushigoimg} alt="Sushigo game" className="sushigo-image img-fluid" />
            </Col>
            <Col md={3}>
              <ComponenteLog ref={ref => (this.componenteLogRef = ref)} />
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
  }
}

export default Sushigo;