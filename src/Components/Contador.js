import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Contador extends Component {
    state = {
        globalCounter: 0,
        turnoCounter: 0,
    };

    componentDidMount() {
        this.globalInterval = setInterval(() => {
            this.setState((prevState) => ({ globalCounter: prevState.globalCounter + 1 }));
            if (this.state.globalCounter >= 9000 * 3600) {
                clearInterval(this.globalInterval);
            }
        }, 1000);

        this.turnoInterval = setInterval(() => {
            this.setState((prevState) => ({ turnoCounter: prevState.turnoCounter + 1 }));
            if (this.state.turnoCounter >= 48 * 3600) {
                clearInterval(this.turnoInterval);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.globalInterval);
        clearInterval(this.turnoInterval);
    }

    handlePasarTurno = () => {
        this.setState({ turnoCounter: 0 });
        clearInterval(this.turnoInterval);
        this.turnoInterval = setInterval(() => {
            this.setState((prevState) => ({ turnoCounter: prevState.turnoCounter + 1 }));
            if (this.state.turnoCounter >= 48 * 3600) {
                clearInterval(this.turnoInterval);
            }
        }, 1000);
    };

    formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours.toString().padStart(2, '0')}h:${minutes
            .toString()
            .padStart(2, '0')}m:${remainingSeconds.toString().padStart(2, '0')}s`;
    };

    render() {
        const { globalCounter, turnoCounter } = this.state;

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4}>
                        <Card className="my-3">
                            <Card.Body>
                                <Card.Title>Partida</Card.Title>
                                <Card.Text>{this.formatTime(globalCounter)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className="my-3">
                            <Card.Body>
                                <Card.Title>Ronda</Card.Title>
                                <Card.Text>{this.formatTime(turnoCounter)}</Card.Text>
                                <Button onClick={this.handlePasarTurno}>Pasar Ronda</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contador;
