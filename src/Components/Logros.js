
import './Logros.css';
import styled from "@emotion/styled";
import maestroprestigio from '../Assets/img/logros//Maestro-removebg-preview.png'
import profesional from '../Assets/img/logros/profesional.png'
import React, { useState } from "react";
import partidas from '../Assets/img/logros/1000 games.png'
import torneos from '../Assets/img/logros/torneo.png'
import victory from '../Assets/img/logros/victory.png'
import candado from '../Assets/img/logros/candado.png'

const Logro = styled.div`
  display: flex;
  margin-right: 3rem;
  margin-left: 3rem;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.desbloqueado ? "  #5DADE2" : "#CCD1D1")};
  padding: 1rem;
  border-radius: 5px;
`;

const Imagen = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 1rem;
`;
const Imagenrango = styled.img`
  width: 200px;
  height: 170px;
  
  align-items: center;
 
`;

const Porcentaje = styled.div`
font-size: 0.85em;
background-color: white;
  border: 1px solid blue;
  border-radius: 5px;
  color: black;
  padding: 5px;
  

`;
const Descripcion = styled.div`
  flex: 1;
  font-size: 1.5em;
  color: white;
  text-stroke: 2px white;
  -webkit-text-stroke: 0.6px black; /* para compatibilidad con Safari */
`;
const Rango = styled.div`

color: white;
  align-items: center;
  text-align:center;
  -webkit-text-stroke: 0.6px black; /* para compatibilidad con Safari */
`;
const Estrellas = styled.div`
display: flex;
  align-items: center;
  
`;

const Estrella = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.activa ? "#F1C40F" : "#d9e3f0")};
  margin-left: 0.3rem;
  border-radius: 50%;
  
`;

const logrosEjemplo = [
  {
    id: 1,
    imagen: partidas,
    descripcion: "JUEGA MÁS DE 500 PARTIDAS",
    imagenrango: maestroprestigio,
    rango: "MAESTRO  DE PRESTIGIO",
    avance: 3,
    desbloqueado: true,
    porcentaje:"500/500"
  },
  {
    id: 2,
    imagen: victory,
    descripcion: "GANA MÁS DE 500 PARTIDAS EN 4 EN RAYA",
    imagenrango: profesional, 
    rango: "  PROFESIONAL",
    avance: 2,
    desbloqueado: true,
    porcentaje:"127/500"
  },
  {
    id: 3,
    imagen: torneos,
    descripcion: "GANA 100  TORNEOS",
    imagenrango: candado, 
    rango: "  BLOQUEADO",
    avance: 0,
    desbloqueado: false,
    porcentaje:"2/10"
  },
];

function Logros() {
    const [logros, setLogros] = useState(logrosEjemplo);

  return (
<section>
      
   
    <div className="logros">
      
      {logros.map((logro) => (
        
        <Logro key={logro.id} desbloqueado={logro.desbloqueado}>
          < div > <Imagen src={logro.imagen} alt="Logro" /></div>
          <Descripcion>{logro.descripcion}</Descripcion>
          < div  >
          <Rango>{logro.rango}</Rango>  
          <Imagenrango src={logro.imagenrango} alt="Rango"/>
          </div>
          
           
          <div >
            <Porcentaje>{logro.porcentaje}</Porcentaje>
          <Estrellas>
          
            {[1, 2, 3].map((numero) => (
              <Estrella key={numero} activa={numero <= logro.avance} />
            ))}
          </Estrellas>
          </div>
        </Logro>
        
      ))}   
    </div>
    </section>
  );
            }

export default Logros;