import React from 'react';

function Ranking() {
  return (
    <section>
      <h2>Ranking</h2>
      <table>
        <thead>
          <tr>
            <th>Posición2</th>
            <th>Jugador</th>
            <th>Puntuación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jugador 1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jugador 2</td>
            <td>90</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jugador 3</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Ranking;