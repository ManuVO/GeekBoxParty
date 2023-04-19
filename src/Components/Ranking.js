import React, { useState } from 'react';
import './Ranking.css';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RankingMensual from './RankingMensual';
import RankingGlobal from './RankingGlobal';
import RankingEjemplo from './RankingEjemplo';

function Ranking() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const renderRankingTable = () => {
    switch (sliderValue) {
      case 0:
        return <RankingGlobal title="Ranking Global" />;
      case 1:
        return <RankingMensual title="Ranking Mensual" />;
      case 2:
        return <RankingEjemplo title="Ranking Ejemplo" />;
      default:
        return null;
    }
  };
  

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Conecta 4</h2>
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
                return 'TicTacToe';
              default:
                return '';
            }
          }}
        />
      </Box>
      {/* Aquí irá la tabla de rankings */}
      {renderRankingTable()}
    </section>
  );
  
}

export default Ranking;