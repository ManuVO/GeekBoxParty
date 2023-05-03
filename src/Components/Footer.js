import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-dark text-center text-md-start d-flex flex-column">
      <Container className="p-4">
        <Row>
          <Col md={6}>
            <h5 className="text-uppercase">GeekBoxParty</h5>
            <p className="text-sm">
              Tu destino para juegos de mesa en línea. Descubre nuestra amplia
              selección de juegos de mesa, desde clásicos hasta los últimos
              lanzamientos. Únete a la diversión con amigos y familiares de
              todo el mundo. ¡Regístrate hoy y comienza tu aventura de juego en
              GeekBoxParty!
            </p>
          </Col>
          <Col md={6}>
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/games" className="text-dark">
                  Juegos
                </a>
              </li>
              <li>
                <a href="/torneos" className="text-dark">
                  Torneos
                </a>
              </li>
              <li>
                <a href="/ranking" className="text-dark">
                  Ranking
                </a>
              </li>
              <li>
                <a href="/comunidad" className="text-dark">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="/comunidad/FAQS" className="text-dark">
                  FAQS
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="mt-auto text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 GeekBoxParty. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
