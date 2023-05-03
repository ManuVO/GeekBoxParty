import styled from "@emotion/styled";
import React, { useState } from "react";
import guiño from '../Assets/img/premios/guiño1.png'
import cohete from '../Assets/img/premios/cartoon-rocket-launch-png.webp'
import sushi from '../Assets/img/premios/sushigo.png'
import moneda from '../Assets/img/premios/moneda mario.png'

const Logro = styled.div`
  display: flex;
  margin-right: 2rem;
  margin-left: 2rem;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.desbloqueado ? "  #5DADE2" : "#CCD1D1")};
  padding: 1rem;
  border-radius: 5px;
`;

const Imagen = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 1rem;
`;
const moneda1 = styled.img`
  width: 200px;
  height: 170px;
  
  align-items: center;
 
`;

const Porcentaje = styled.div`
font-size: 0.85rem;
background-color: white;
  border: 1px solid blue;
  border-radius: 5px;
  color: black;
  padding: 7px;
  

`;
const Descripcion = styled.div`
  flex: 1;
  font-size: 1rem;
  color: white;
  text-stroke: 2px white;
  -webkit-text-stroke: 0.6px black; /* para compatibilidad con Safari */
`;


const logrosEjemplo = [
  {
    id: 1,
    imagen: sushi,
    descripcion: "Sushi Go Party!",
    moneda: moneda,
    rango: "MAESTRO  DE PRESTIGIO",
    avance: 3,
    desbloqueado: false,
    porcentaje:"500.000"
  },
  {
    id: 2,
    imagen: guiño,
    descripcion: "-Skin Emoji Guiño 4 en Raya-",
    moneda:moneda,
    
    desbloqueado: true,
    porcentaje:"20.000"
  },
  {
    id: 3,
    imagen: cohete,
    descripcion: "-Skin Marcador Galactico-",
    moneda:moneda,
    
    desbloqueado: false,
    porcentaje:"50.000"
  },
  
  
];

function Premios() {
    const [logros, setLogros] = useState(logrosEjemplo);
   
  return (
<section>
      

    <div class="logros">
      
      {logros.map((logro) => (
        
        <Logro key={logro.id} desbloqueado={logro.desbloqueado}>
          < div > <Imagen src={logro.imagen} alt="Logro" /></div>
          <Descripcion>{logro.descripcion}</Descripcion>
         
           
          
          <Porcentaje>
            {logro.porcentaje}
            <img src={logro.moneda} alt="Moneda" style={{ width: 20, height: 20, marginRight: 10 }} />
          </Porcentaje>

          
          
        </Logro>
        
      ))}   
    </div>
    </section>
  );
            }

export default Premios;