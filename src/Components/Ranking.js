import React, { useState } from 'react';
import './Ranking.css';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RankingMensual from './RankingMensual';
import RankingGlobal from './RankingGlobal';
import RankingEjemplo from './RankingEjemplo';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function Ranking() {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedGame, setSelectedGame] = useState('conecta4');

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  const renderRankingTable = () => {
    switch (sliderValue) {
      case 0:
        return <RankingGlobal title={`Ranking Global - \${selectedGame}`} />;
      case 1:
        return <RankingMensual title={`Ranking Mensual - \${selectedGame}`} />;
      case 2:
        return <RankingEjemplo title={`Ranking Ejemplo - \${selectedGame}`} />;
      default:
        return null;
    }
  };

  return (
    <section className="sectionRanking" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="game-select-label">Juego</InputLabel>
        <Select
          labelId="game-select-label"
          id="game-select"
          value={selectedGame}
          onChange={handleGameChange}
        >
          <MenuItem value="conecta4">Conecta 4</MenuItem>
          <MenuItem value="tictactoe">Tic Tac Toe</MenuItem>
          <MenuItem value="sushigo">Sushi Go</MenuItem>
          <MenuItem value="ajedrez">Ajedrez</MenuItem>
        </Select>
      </FormControl>
      <h2>{selectedGame}</h2>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Ranking slider"
          value={sliderValue}
          onChange={handleChange}
          step={1}
          marks
          min={0}
          max={2}
          valueLabelFormat={(value) => {
            switch (value) {
              case 0:
                return 'Global';
              case 1:
                return 'Mensual';
              case 2:
                return 'Ejemplo';
              default:
                return '';
            }
          }}
        />
      </Box>
      {renderRankingTable()}
    </section>
  );
}

export default Ranking;
