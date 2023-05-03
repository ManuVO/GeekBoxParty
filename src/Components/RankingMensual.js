import React from 'react';
import './Ranking.css';

function RankingMensual() {
  return (
    <section className="sectionRanking"> 
      <h2>TOP Mensual</h2>
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
            <td>JoakiGPI</td>
            <td>1869</td>
          </tr>
          <tr>
            <td>2</td>
            <td>AriaHG</td>
            <td>1780</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mircan</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>4</td>
            <td>ManuTNT</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RankingMensual;