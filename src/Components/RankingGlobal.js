import React from 'react';
import './Ranking.css';

function RankingGlobal() {
  return (
    <section className="sectionRanking"> 
      <h2>TOP Global</h2>
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
            <td>AriaHG</td>
            <td>5670</td>
          </tr>
          <tr>
            <td>2</td>
            <td>JoakiGPI</td>
            <td>5600</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ManuTNT</td>
            <td>4500</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mircan</td>
            <td>3000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RankingGlobal;