import { alignProperty } from "@mui/material/styles/cssUtils";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  function sendToGame(game) {
    navigate(`/game/${game}`);
  }

  return (
    <>
      <div className="container">
        <Card
          className="row"
          style={{
            width: "100%",
            height: "250px",
            marginBottom: "20px",
            marginTop: "10px",
          }}
        >
          <Card.Body className="col d-flex">
            <Card.Img
              src={game.image}
              alt={game.title}
              style={{ width: "200px", height: "200px" }}
              className="mr-3"
            />
            <div className="d-flex flex-column justify-content-between col-8">
              <div style={{ flex: 1 }}>
                <Card.Title
                  className="d-inline h2 font-weight-bold text-truncate"
                  style={{ padding: "2%" }}
                >
                  {game.title}
                </Card.Title>
                <Card.Text
                  className="h5"
                  style={{
                    overflowWrap: "break-word",
                    paddingLeft: "5%",
                    paddingTop: "1%",
                    textAlign: "left",
                  }}
                >
                  {game.description}
                </Card.Text>
              </div>
            </div>
            <div className="col d-flex">
              <div style={{ width: "fit-content" }}>
                <Button
                  onClick={() => sendToGame(game.id)}
                  variant="success"
                  className="btn"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Jugar
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default GameCard;
