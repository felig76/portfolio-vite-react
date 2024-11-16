import React from 'react';
import './Proyecto.css';

function Proyecto({ project }) {
  const { titulo, descripcion, tecnologias, repositorio } = project;

  return (
    <div class='proyecto'>
      <h2 id='titulo'>{titulo}</h2>
      <p id='descripcion'>{descripcion}</p>
      <div className="tecnologias">
        {tecnologias.map((tech) => (
          <div class='tecnologia'>
            <div class='colorTecnologia' style={{ backgroundColor: tech.color }}></div>
            <h3 id='nombreTech'>{tech.nombre}</h3>
          </div>
        ))}
      </div>
      <a href={repositorio} target="_blank" id='repo'>repo</a>
    </div>
  );
}

export default Proyecto;
