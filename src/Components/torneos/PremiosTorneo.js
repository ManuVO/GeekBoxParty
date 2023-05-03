import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { AwardFill } from 'react-bootstrap-icons';
import moneda from '../../Assets/img/premios/moneda mario.png'
import '../../Screens/css/Torneos.css';

function Premios() {
    return (
        <Card style={{ width: '20rem' }} className="text-center">
            <Card.Header>
                <h3>Premios</h3>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <AwardFill color="gold" size={24} /> 1º Premio {'5000'}
                    <img src={moneda} alt="GeekCoins" className="torneo-geekcoin" />
                </ListGroup.Item>
                <ListGroup.Item>
                    <AwardFill color="silver" size={24} /> 2º Premio {'2500'}
                    <img src={moneda} alt="GeekCoins" className="torneo-geekcoin" />
                </ListGroup.Item>
                <ListGroup.Item>
                    <AwardFill color="#CD7F32" size={24} /> 3º Premio {'500'}
                    <img src={moneda} alt="GeekCoins" className="torneo-geekcoin" />
                </ListGroup.Item>
                <ListGroup.Item>
                    <AwardFill color="#CD7F32" size={24} /> 4º Premio {'500'}
                    <img src={moneda} alt="GeekCoins" className="torneo-geekcoin" />
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Premios;



