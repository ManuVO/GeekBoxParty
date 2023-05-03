import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class BracketTorneo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuartos: [
                { id: 1, jugadores: ['AriaHG', 'Jugador 2', 'Jugador 3', 'Jugador 4'], ganador: 'AriaHG' },
                { id: 2, jugadores: ['Mircan', 'Jugador 6', 'Jugador 7', 'Jugador 8'], ganador: 'Mircan' },
                { id: 3, jugadores: ['JoakiGPI', 'Jugador 10', 'Jugador 11', 'Jugador 12'], ganador: 'JoakiGPI' },
                { id: 4, jugadores: ['ManuTNT', 'Jugador 14', 'Jugador 15', 'Jugador 16'], ganador: 'ManuTNT' },
            ],
            semifinales: [
                { id: 1, jugadores: ['AriaHG', 'Mircan'], ganador: null },
                { id: 2, jugadores: ['JoakiGPI', 'ManuTNT'], ganador: null },
            ],
            final: { jugadores: [], ganador: null },
        };
    }


    renderRonda(ronda, titulo) {
        return (
            <Col>
                <h3>{titulo}</h3>
                {ronda.map((partido) => (
                    <Card key={partido.id} className="mb-3">
                        <Card.Header>
                            {partido.ganador ? (
                                <span className="text-success">{`Ganador: ${partido.ganador}`}</span>
                            ) : (
                                'Pendiente'
                            )}
                        </Card.Header>
                        <Card.Body>
                            {partido.jugadores.map((jugador, index) => (
                                <p key={index} className={jugador === partido.ganador ? 'text-success' : ''}>
                                    {jugador}
                                </p>
                            ))}
                            <Link to="/game/sushigo" className="btn btn-primary">
                                Partida
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Col>
        );
    }

    render() {
        const { cuartos, semifinales, final } = this.state;

        return (
            <Container>
                <Row>
                    {this.renderRonda(cuartos, 'Cuartos')}
                    {this.renderRonda(semifinales, 'Semifinales')}
                    <Col>
                        <h3>Final</h3>
                        <Card>
                            <Card.Header>
                                {final.ganador ? (
                                    <span className="text-success">{`Ganador: \${final.ganador}`}</span>
                                ) : (
                                    'Pendiente'
                                )}
                            </Card.Header>
                            <Card.Body>
                                {final.jugadores.map((jugador, index) => (
                                    <p key={index} className={jugador === final.ganador ? 'text-success' : ''}>
                                        {jugador}
                                    </p>
                                ))}
                                <Button variant="primary" onClick={() => console.log('Mostrar detalles')}>
                                    Detalles
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BracketTorneo;
