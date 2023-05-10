import React from 'react';
import TemporadaSushiGo from '../Assets/img/temporadaSushiGo.png'
import noticia1 from '../Assets/img/ariachg.png'
import noticia3 from '../Assets/img/geekExperto.png'
import noticia2 from '../Assets/img/7wonders.jpg'
import noticia4 from '../Assets/img/tictactoe.png'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Noticiario = () => {

    const noticias = [
        {
            src: noticia3,
            titulo: 'Geek Estrategia: Catán',
            subtitulo: 'Gestiona tus recursos en Catán con los consejos del Geek Experto Juanjo',
            ruta: '/comunidad/geekExperto', // Agrega la ruta aquí
        },
        {
            src: noticia1,
            titulo: 'La jugadora AriaHG lidera Conecta 4',
            subtitulo: 'Aria anda conectada y asalta la primera posición con 5670 puntos.',
            ruta: '#', // Agrega la ruta aquí
        },

        {
            src: noticia4,
            titulo: 'Siguiente Temporada: 3 en Raya',
            subtitulo: 'Ve preparando esas rayas',
            ruta: '#', // Agrega la ruta aquí
        },
    ];

    const navigate = useNavigate();

    const handleOnClick = (path) => {
        navigate(path);
    };


    return (
        <Container>
            <Row>
                <Col md="8">
                    <Card className="mb-3">
                        <CardImg
                            top
                            width="100%"
                            height="470px"
                            src={TemporadaSushiGo}
                            alt="Imagen principal"
                        />
                        <CardBody>
                            <CardTitle tag="h4" className="font-weight-bold">GeekCoins dobles en todos los modos de Sushi Go! </CardTitle>
                            <CardSubtitle tag="h6" className="text-muted">Consigue 5000 puntos en la Temporada y consigue un marcador especial Sushi Go!</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    {noticias.map((noticia, index) => (
                        <Card key={index} className="mb-3">
                            <Row noGutters>
                                <Col md="4" className="d-flex align-items-center justify-content-center">
                                    <CardImg
                                        top
                                        width="100%"
                                        height="90px"
                                        src={noticia.src}
                                        alt={`Imagen noticia ${index + 1}`}
                                        className="ml-5"
                                        onClick={() => handleOnClick(noticia.ruta)} // Reemplaza '/ruta-deseada' con la ruta a la que quieres navegar
                                    />
                                </Col>
                                <Col md="8">
                                    <CardBody>
                                        <CardTitle tag="h5" className="font-weight-bold">{noticia.titulo}</CardTitle>
                                        <CardSubtitle tag="h6" className="text-muted">{noticia.subtitulo}</CardSubtitle>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>


                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Noticiario;
