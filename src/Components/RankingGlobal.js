import React from 'react';
import './Ranking.css';

function RankingGlobal() {
  return (
    <section>
      <h2>Ranking Global</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Jugador</th>
            <th>Puntuación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Joaquín</td>
            <td>5600</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Manu</td>
            <td>4500</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cristina</td>
            <td>3780</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RankingGlobal;