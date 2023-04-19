import React from 'react';
import './Ranking.css';

function RankingMensual() {
  return (
    <section>
      <h2>Ranking Mensual</h2>
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
            <td>1869</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cristina</td>
            <td>1780</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pedro</td>
            <td>1500</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RankingMensual;