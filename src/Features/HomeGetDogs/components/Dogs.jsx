import React from 'react';
import './Dogs.css';
import Imgs from './Imgs';

const Dogs = ({ data }) => {
  if (data) {
    return (
      <>
        <ul>
          {data.map((dados) => (
            <li key={dados.id} className="liPost">
              <div>
                <Imgs src={dados.src} title={dados.title} />
                <span className="acessos">{dados.acessos}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default Dogs;
