import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import geekExperto from '../Assets/img/geekExpertoLong.png';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const Articulo = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row className="my-3">
                    <Col className="text-center"> {/* Agrega la clase 'text-center' */}
                        <Image src={geekExperto} alt="Imagen alargada" fluid />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col > {/* Agrega la clase 'text-center' */}
                        <h1>Geek Estrategia: Catán</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>El Geek Experto Juanjo da consejos y trucos para gestionar tus recursos en Catán y ganar la partida</Card.Title>
                                <Card.Text>
                                    Catán es un juego de mesa en el que los jugadores deben gestionar sus recursos para construir ciudades, carreteras y otros elementos. Juanjo, el Geek Experto, comparte sus consejos y trucos para ayudarte a ganar la partida:
                                    <ul>
                                        <li>Comienza por enfocarte en obtener recursos clave como ladrillos y madera, necesarios para construir carreteras y asentamientos.</li>
                                        <li>Establece una estrategia de intercambio sólida con otros jugadores para conseguir los recursos que te falten.</li>
                                        <li>Observa las acciones de tus oponentes y adapta tu estrategia en función de sus movimientos.</li>
                                        <li>Utiliza las cartas de desarrollo de forma inteligente, ya que pueden darte una ventaja significativa en el juego.</li>
                                        <li>Expande tu territorio de manera equilibrada para aumentar tus posibilidades de obtener recursos y puntos de victoria.</li>
                                    </ul>
                                    Siguiendo estos consejos y trucos de Juanjo, podrás gestionar tus recursos de manera eficiente y aumentar tus posibilidades de ganar en Catán. ¡Buena suerte!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Articulo;