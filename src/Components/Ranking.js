import React, { useState } from 'react';
import './Ranking.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RankingMensual from './RankingMensual';
import RankingGlobal from './RankingGlobal';
import RankingEjemplo from './RankingEjemplo';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Ranking() {
  const [selectedGame, setSelectedGame] = useState(0);

  const games = [
    { label: 'Conecta 4', value: 'conecta4' },
    { label: 'Tic Tac Toe', value: 'tictactoe' },
    { label: 'Sushi Go', value: 'sushigo' },
    { label: 'Ajedrez', value: 'ajedrez' },
  ];

  const handleGameChange = (newValue) => {
    setSelectedGame(newValue);
  };

  const renderRankingTable = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
        <Box sx={{ marginRight: 16 }}>
          <Button variant="primary" className="btn-icon-only btn-lg" onClick={() => handleGameChange((selectedGame - 1 + games.length) % games.length)}>
            <i className="bi bi-arrow-left"></i>
          </Button>
        </Box>
        <Box>
          <Box sx={{ marginBottom: 8 }}>
            <Typography variant="h5" component="h2">
              {games[selectedGame].label}
            </Typography>
          </Box>
          <RankingGlobal title={`Ranking Global - \${games[selectedGame].label}`} />
          <Box sx={{ marginTop: 16 }}>
            <RankingMensual title={`Ranking Mensual - \${games[selectedGame].label}`} />
          </Box>
        </Box>
        <Box sx={{ marginLeft: 16 }}>
          <Button variant="primary" className="btn-icon-only btn-lg" onClick={() => handleGameChange((selectedGame + 1) % games.length)}>
            <i className="bi bi-arrow-right"></i>
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <section className="sectionRanking" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {renderRankingTable()}
    </section>
  );
}

export default Ranking;
